<template>
    <div class="person" id="main">
        <div class="screenError">
            В данный момент на сайте ведутся техническией работы. Пожалуйста, поспользуйтесь пк версией сайта
        </div>

        <NavigationBar/>
        <div class="main_division">

            <!-- Левая часть -->
            <div class="left_information">

                <!-- Ава -->
                <div v-for="(person, index) in persons"
                     :key="index">
                    <img :src="person.avatar" class="image_style">
                </div>

                <!-- Компетенции -->
                <div class="skills_style">
                    <p class="competences_style">Навыки:</p>
                    <div v-for="(person, index) in persons"
                         :key="index" class="main_competences" style="display: flex; flex-direction: column">
                        <div v-for="(competence2, index) in person.skills"
                             :key="index" style="display: flex; margin-bottom: 10px">
                            <div v-for="(competences, index) in competence2"
                                 :key="index" class="competences">
                                <p class="p_competences_style">{{competences}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Правая часть-->
            <div class="right_information">

                <!-- Имя -->
                <div v-for="(person, index) in persons"
                     :key="index">
                    <h1 class="name_style">
                        {{person.name}}</h1>
                </div>

                <!-- Роль в команде -->
                <div v-for="(person, index) in persons"
                     :key="index">
                    <h2 class="role_style">
                        {{person.competences}}</h2>
                </div>

                <!-- Текст о себе + пасхалка (!НЕ УДАЛЯТЬ!) -->
                <div style="display: flex; flex-direction: row" v-for="(person, index) in persons"
                     :key="index">
                    <h2 class="about_text_style">
                        О себе</h2>
                    <img v-if="person.canPlayMusic" src="/music-and-multimedia.svg"
                         style="margin-top: 53px; max-width: 20px;" v-on:click="soundClick()"/>
                </div>

                <!-- Информация о человеке -->
                <div v-for="(person, index) in persons"
                     :key="index" style="text-align: justify">
                    <h2 class='about_person_style'>
                        {{person.about}}</h2>
                </div>

                <!-- Кнопки выбора Проекты/Мероприятия -->
                <div class="switch">
                    <button class="button_style" id="button_1" style="margin-bottom: 30px; cursor: pointer" v-on:click="ShowProjects()">
                        Проекты
                    </button>
                    <button class="button_style" id="button_2" style="color: #666; margin-bottom: 30px; cursor: pointer"
                            v-on:click="ShowEvents()">
                        Мероприятия
                    </button>
                </div>

                <!-- Блок проектов-->
                <div id="projects" v-for="(person, index) in persons"
                     :key="index" class="project_style1">
                    <div v-for="(img2, index) in person.projects"
                         :key="index" class="project_style2">
                        <div v-for="(img, index) in img2"
                             :key="index">
                            <img :src="img[0]" v-on:click="OpenLink(img[1])" style="margin-right: 30px; margin-bottom: 30px; cursor: pointer">
                        </div>
                    </div>
                </div>

                <!-- Блок мероприятий -->
                <div id="events" style="display: none" v-for="(person, index) in persons"
                     :key="index">
                    <div class="text_event_style"
                         v-for="(event, index) in person.eventsCompetition"
                         :key="index">
                        <img src="/006-winner-5.png" class="image_event_style"/>
                        {{event}}
                    </div>
                    <div class="text_event_style"
                         v-for="(event, index) in person.evetsHack"
                         :key="index">
                        <img src="/002-winner-7.png" class="image_event_style"/>
                        {{event}}
                    </div>
                    <div class="text_event_style"
                         v-for="(event, index) in person.eventSchool"
                         :key="index">
                        <img src="/046-winner-1.png" class="image_event_style"/>
                        {{event}}
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar";

    class Person {
        constructor(avatar, name, competences, about, skills, projects, canPlayMusic = false, eventsCompetition, evetsHack, eventSchool) {
            this.avatar = avatar;
            this.name = name;
            this.competences = competences;
            this.about = about;
            this.skills = skills;
            this.projects = projects;
            this.canPlayMusic = canPlayMusic;
            this.eventsCompetition = eventsCompetition;
            this.evetsHack = evetsHack;
            this.eventSchool = eventSchool;
        }
    }

    export default {
        name: "Person",
        components: {NavigationBar},
        data() {
            return {
                persons: [
                    new Person("/img/test.jpeg",
                        'Эмиль Насыров',
                        'Сооснователь / CIO',
                        'Опора наших разработчиков и неимоверно талантливый человек, который участвовал в крупных проектах и большом количестве хакатанов, был экспертом и на них, и в образовательных школах. Он один из самых ценных сотрудников, так как является разработчиком архитектур сложных приложений.\n' +
                        ' Как же он пришёл в IT сферу? Это довольно-таки интересная история. После расставания с девушкой, он хотел взломать ее социальную сеть, не понимая даже причину сподвигшую на это действие, но не имел на тот момент навыков в программировании, а, грубо говоря, вообще был полным нулем в этом деле, поэтому начал изучать программирование. Начинал с самого простого, спустя несколько месяцев отправил заявку в одну фирму, которую приняли спустя два месяца, было тяжеловато работать, так как это был первый опыт, но, благодаря этому, преуспел в программировании, а вскоре это дело ему полюбилось и ушёл в него с головой. Сейчас мы очень благодарны его бывшей девушке, так как если бы не эта ситуация, то, может быть, Эмиль вообще не брался бы за это дело.',
                        [['back-end', 'android', 'web'], ['ml', 'bots']],
                        [[["/img/projects/Rectangle46.png", '/'], ["/img/projects/Rectangle42.png", '/']], [["/img/projects/Rectangle43.png", '/'], ["/img/projects/Rectangle45.png", '/']], [["/img/projects/Rectangle41.png", '/'], ["/img/projects/Rectangle44.png", '/']]],
                        true,
                        ['НТИ Искусственный интеллект финал', 'НТИ Большие данные и машинное обучение финал'],
                        ['BestHack', 'MediaHack', 'SpringHack', 'GameHack', 'Поисково-спасательный хакатон', 'DH Hack'],
                        ['Тинькофф ML', 'Тинькофф DL', 'Samsung IT-School']
                    ),
                    //new Person('',
                    //        'Вадим Циндяйкин',
                    //        'Ведущий Разработчик',
                    //        'Гениален не по годам – это точно про Вадима! Еще в юные годы он показывал себя в точных науках, что в дальнейшем привело его в IT сферу и не прогадал, так как таких умов, как у него тяжело сыскать. Но ум и талант еще не все! Вадим крайне трудолюбивый человек, который может сутками напролет работать и при этом качество его работы остается на должном уровне. Позвал в этот проект его Владимир на одном из мероприятий, Вадим посчитал эту идею перспективной и решил принять участие в этом стартапе.',
                    //        ['back-end', 'android', 'bots']
                    //)

                ]
            }
        },
        methods: {
            ShowEvents: function () {
                document.getElementById("projects").style.display = "none";
                document.getElementById("button_1").style.color = "#666";
                document.getElementById("events").style.display = "block";
                document.getElementById("button_2").style.color = "#EBEBF0";
                document.getElementById("button_1").style.borderBottom = "none";
                document.getElementById("button_2").style.borderBottom = "none";
            },
            ShowProjects: function () {
                document.getElementById("projects").style.display = "block";
                document.getElementById("events").style.display = "none";
                document.getElementById("button_1").style.color = "#EBEBF0";
                document.getElementById("button_2").style.color = "#666";
            },
            // !НЕ УДАЛЯТЬ!
            soundClick: function () {
                // дописать оставновку и проверку на поддерживаемость
                let audio = new Audio();
                audio.src = '/audio/aboutEmil.mp4';
                audio.autoplay = true;
            },
            OpenLink: function (link) {
                document.location.href = link;
            }
        }
    }
</script>

<style scoped lang="scss">
    .person {
        background-color: $black-darker;
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    .screenError{
        display: none;
        color: red;
        background: #FFFFFF;
    }

    .about_person_style{
        color: #EBEBF0;
        font-family: SF Pro Display;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        margin: 0
    }

    .about_text_style{
        color: #EBEBF0;
        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        line-height: 36px;
        margin-top: 70px;
        margin-right: 15px
    }

    .role_style{
        color: #FDDD48;
        font-family: SF Pro Display;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        margin: 0
    }

    .competences_style{
        color: #EBEBF0;
        font-weight: 500;
        font-size: 18px;
    }

    .name_style{
        color: #EBEBF0;
        font-family: SF Pro Display;
        font-weight: 500;
        font-size: 50px;
        line-height: 43px;
        margin-bottom:10px;
        margin-top:0
    }

    .p_competences_style{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #EBEBF0;
        margin: 0;
    }

    .text_event_style{
        background: #343545;
        padding: 18px;
        display: flex;
        text-align: center;
        color: #EBEBF0;
        align-items: center;
        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 20px
    }

    .button_style {
        background-color: $black-darker;
        color: #EBEBF0;
        font-family: Oswald;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 27px;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: #EBEBF0;
        margin-right: 40px;
        margin-top: 70px;
    }

    button:focus {
        outline: none !important;
        color: #EBEBF0;
    }

    .main_division {
        padding: 16px;
        padding: 70px;
        display: flex;
    }

    .left_information {
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }

    .right_information {
        flex: 2;
    }

    .image_event_style{
        max-height: 100px;
        margin-right: 20px;
    }

    .main_competences {
        display: flex;
    }

    .project_style1{
        display: flex;
        flex-direction: column
    }

    .project_style2{
        display: flex;
    }

    .competences {
        padding: 10px;
        background: #343545;
        margin-right: 10px;
        color: #EBEBF0;
    }

    .image_style {
        flex: 1;
        width: 60%;
    }

    .skills_style {
        flex: 3;
    }

    @media (max-width: 767px) {
        .main_division {
            display: none;
        }
        .screenError{
            display: block;
        }
    }
    @media (max-height: 473px) {
        .main_division {
            display: none;
        }
        .screenError{
            display: block;
        }
    }
    @media (max-width: 1143px) {
        .project_style2{
            flex-direction: column;
        }
    }
    @media (max-width: 1000px) {
        .image_style{
            max-width: 80%;
        }
        .about_person_style{
            font-size: 18px;
        }
    }
    @media (max-width: 1250px) {
        .image_style{
            max-width: 80%;
        }
    }
    @media (max-width: 1200px) {
        .image_style{
            max-width: 90%;
        }
    }
    @media (max-width: 839px) {
        .competences_style{
            font-size: 14px;
        }
        .p_competences_style{
            font-size: 14px;
        }
        .button_style{
            font-size: 18px;
        }
        .text_event_style{
            font-size: 16px;
        }
        .image_event_style{
           max-width: 50px;
        }
    }
    @media (max-width: 755px) {
        .competences_style{
            font-size: 12px;
        }
        .about_person_style{
            font-size: 18px;
        }
        .p_competences_style{
            font-size: 10px;
        }
    }
</style>