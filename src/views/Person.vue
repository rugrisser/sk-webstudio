<template>
    <div class="person" id="main">
        <div class="screenError">
            <div style="display: flex; flex-direction: column; margin: auto; font-weight: bold">
                <span>Вы из будущего?</span>
                <span>Если нет, то мобильная версия еще в разработке.</span>
                <span>Вы всегда можете оценить наш сайт с Вашего ПК</span>
            </div>
        </div>

        <NavigationBar/>
        <div class="container main_division">

            <!-- Левая часть -->
            <div class="row">
                <div class="col-4">

                    <!-- Ава -->
                    <div>
                        <img :src="persons[id].avatar" class="image_style">
                    </div>

                    <!-- Компетенции -->
                    <div class="skills_style">
                        <p class="competences_style">Навыки:</p>
                        <div v-for="(competence, index) in persons[id].skills"
                             :key="index" style="display: inline-block; margin-bottom: 10px">
                            <div class="competences">
                                <p class="p_competences_style">{{ competence }}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Правая часть-->
                <div class="col-8">

                    <!-- Имя -->
                    <div>
                        <h1 class="name_style">
                            {{persons[id].name}}</h1>
                    </div>

                    <!-- Роль в команде -->
                    <div>
                        <h2 class="role_style">{{persons[id].competences}}</h2>
                    </div>

                    <!-- Текст о себе + пасхалка (!НЕ УДАЛЯТЬ!) -->
                    <div style="display: flex; flex-direction: row">
                        <h2 class="about_text_style">О себе</h2>
                        <img v-if="persons[id].canPlayMusic" src="/music-and-multimedia.svg"
                             style="margin-top: 53px; max-width: 20px; cursor: pointer" v-on:click="soundClick()"/>
                    </div>

                    <!-- Информация о человеке -->
                    <div>
                        <h2 class='about_person_style'>{{persons[id].about}}</h2>
                    </div>

                    <!-- Кнопки выбора Проекты/Мероприятия -->
                    <div class="switch">
                        <button class="button_style" id="button_1" style="margin-bottom: 30px; cursor: pointer"
                                v-on:click="ShowProjects()">
                            Проекты
                        </button>
                        <button class="button_style" id="button_2"
                                style="color: #666; margin-bottom: 30px; cursor: pointer"
                                v-on:click="ShowEvents()">
                            Мероприятия
                        </button>
                    </div>

                    <!-- Блок проектов-->
                    <div id="projects" class="project_style1">
                        <div v-for="(img2, index) in persons[id].projects"
                             :key="index" class="project_style2">
                            <div v-for="(img, index) in img2"
                                 :key="index">
                                <img :src="img[0]" v-on:click="OpenLink(img[1])"
                                     class="project_image_style">
                            </div>
                        </div>
                        <div v-if="!persons[id].thereAnyProjects">
                            <h2 class='about_person_style'>В данный момент мы работаем
                                над заполнениями проектов этого человека.
                                Вы можете увидеть проекты других наших разработчиков, а также посмотреть наши проекты в портфолио</h2>
                        </div>
                    </div>

                    <!-- Блок мероприятий -->
                    <div id="events" style="display: none">
                        <div class="text_event_style"
                             v-for="(event, index) in persons[id].eventsCompetition"
                             :key="index">
                            <img src="/006-winner-5.png" class="image_event_style"/>
                            {{event}}
                        </div>
                        <div class="text_event_style"
                             v-for="(event, index) in persons[id].evetsHack"
                             :key="index">
                            <img src="/002-winner-7.png" class="image_event_style"/>
                            {{event}}
                        </div>
                        <div class="text_event_style"
                             v-for="(event, index) in persons[id].eventSchool"
                             :key="index">
                            <img src="/046-winner-1.png" class="image_event_style"/>
                            {{event}}
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <Footer/>
    </div>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar";
    import Footer from "@/components/Footer";

    class Person {
        constructor(avatar, name, competences, about, skills, thereAnyProjects, projects, canPlayMusic = false, eventsCompetition, evetsHack, eventSchool) {
            this.avatar = avatar;
            this.name = name;
            this.competences = competences;
            this.about = about;
            this.skills = skills;
            this.thereAnyProjects = thereAnyProjects;
            this.projects = projects;
            this.canPlayMusic = canPlayMusic;
            this.eventsCompetition = eventsCompetition;
            this.evetsHack = evetsHack;
            this.eventSchool = eventSchool;
        }
    }

    export default {
        name: "Person",
        components: {Footer, NavigationBar},
        data() {
            return {
                id: 0,
                persons: [
                    new Person("/img/employees/2.jpg",
                        'Эмиль Насыров',
                        'CIO',
                        'Он - неимоверно талантливый человек, являющийся опорой всех наших разработчиков. Участия в большом количестве крупных проектов и хакатонов принесли Эмилю уникальный и ценный опыт, благодаря которому он не раз являлся экспертом на подобных мероприятиях. Эмиль - один из самых ценных сотрудников, так как является ведущим разработчиком архитектур сложных приложений.',
                        ['back-end', 'android', 'web', 'ml', 'bots', 'database', 'java', 'kotlin', 'javascript', 'php', 'lua', 'c++', 'c#', 'sql', 'vue', 'spring', 'идейность', 'организованность'],
                        true,
                        [[["/img/projects/main1.png", '/portfolio/4'], ["/img/projects/main9.png", '/portfolio/6']], [["/img/projects/main12.png", '/portfolio/8'], ["/img/projects/main3.png", '/portfolio/7']], [["/img/projects/main19.jpg", '/portfolio/5'], ["/img/projects/main18.png", '/portfolio/18']]],
                        false,
                        ['НТИ Искусственный интеллект финал', 'НТИ Большие данные и машинное обучение финал'],
                        ['BestHack', 'MediaHack', 'SpringHack', 'GameHack', 'Поисково-спасательный хакатон', 'DH Hack'],
                        ['Тинькофф ML', 'Тинькофф DL', 'Samsung IT-School']
                    ),
                    new Person('/img/employees/15.jpg',
                        'Вадим Циндяйкин',
                        'Ведущий Разработчик',
                        '“Гениален не по годам” – это точно про Вадима! Еще в юные годы он отлично показывал себя в точных науках, что в дальнейшем привело его в сферу IT, в которой ему удалось достичь неимоверных высот. Ум и талант  - это еще не все! Вадим является крайне трудолюбивым человеком, который может сутками напролет работать, при этом не снижать качество работы. Вадим - корень трудолюбия нашей команды!',
                        ['back-end', 'android', 'bots', 'java', 'javascript', 'spring', 'django', 'flask', 'scala'],
                        false,
                        [[['', ''], ['', '']], [['', ''], ['', '']]],
                        false,
                        ['Кейс-лаборатория КРОК'],
                        ['Летняя практика КРОК', 'Сколково хакатон', 'DH HAck'],
                        ['Школа IT-Решений']
                    ),
                    new Person('/img/employees/1.jpg',
                        'Владимир Яфаров',
                        'CEO',
                        'Владимир - невероятно чуткий руководитель, обладающий всеми качествами настоящего лидера, такими, как трудолюбие, идейность, чувство долга и ответственности, а самое главное - преданность своему делу! К каждому сотруднику Владимир может найти подход, а в нужный момент он может оказать моральную поддержку. В первую очередь, для Владимира, компания Sk.WebStudio - это объединение творческих и сильных ребят, которые способны создавать оригинальные и качественные решения, не имеющие аналогов в мире.',
                        ['bots', 'android', 'ml', 'комуникабельность', 'ответственность', 'харизматичность', 'любознательность', 'лидерские качества'],
                        false,
                        [[['', ''], ['', '']], [['', ''], ['', '']]],
                        false,
                        ['ОЦ Сириус "Большие вызовы 2019"', '1 место по предпринимательству и экономики на коференции МГК', 'Первое место в направлении "Умный город" на конференции МГК', '2 место на научной выстовке Архимед', '1 место в интелектуальном турнире "Умножая таланты"', '1 место на кейс-чемпионате "CUP MISIS CASE 2018"', '4 место на международном кейс-чемпионате case-in', 'Финалист конкурса "Высший пилотаж" от McKinsey и ВШЭ'],
                        ['DH Hack', 'SpringHack', 'VK Hack 2019'],
                        ['Школа IT-Решений', 'Акселератор компании КРОК', 'Кейс-лаботратория КРОК']
                    ),
                    new Person('/img/employees/3.jpg',
                        'Фаррух Исматов',
                        'Главный менеджер - СОО',
                        'Сейчас Фаррух является главным менеджером Sk.Webstudio. Следить за работой всех менеджеров непросто, поэтому он обладает такими качествами, как дисциплинированность и организованность. Именно благодаря нему деятельность менеджеров слаженная, а работа продуктивная. Труд Фарруха можно сравнить с кнутом и пряником, правда пряник он уже съел :)',
                        ['целеустремленность', 'собранность', 'организованность', 'справедливость', 'комуникативность', 'результативность', 'харизматичность'],
                        false,
                        [[['', ''], ['', '']], [['', ''], ['', '']]],
                        false,
                        ['Победитель окружного этапа МГК'],
                        ['Призер городской конференции "Шаг в будущее"', 'Не был ни на одном уроке физической культуры в 11 класс'],
                        ['Выпускник технопарка "Калибр"']
                    ),
                    new Person('/img/employees/4.jpg',
                        'Михаил Бесхитров',
                        'Разработчик',
                        'Со школьной скамьи Михаил интересовался программированием. После, это переросло из простого хобби в полноценную работу. Сейчас Михаил является одним из ведущих разработчиков студии, он прекрасно справляется со своей работой, ведь он живет этим делом. Михаил учился в школе Samsung и Yandex лицее. Является ведущим звеном объединения Microsoft Student Partners.',
                        ['back-end', 'android', 'bots', 'dart', 'r#', 'javascript', 'database', 'kotlin', 'python', 'java', 'c#', 'lua'],
                        true,
                        [[['/img/projects/main6.png', '/portfolio/3']]],
                        false,
                        ["Школа реальных дел", "Школа IT решений", "World Skills Machine Learning", "Инженеры будущего", "Кейс-лаборатория КРОК"],
                        ["BestHAck", "DH Hack", "Хакатон ФЦК", "AR/CS Hack", "Game Hack (Геккон)", "Game Hack (MSP)", "Дата журналистика", "Школьный хакатон"],
                        ["Samsung IT school", "Яндекс.Лицей", "Летняя практика в КРОК"]
                    ),
                    new Person('/img/employees/5.jpg',
                        'Георгий Шишов',
                        'Дизайнер',
                        'Георгий - самый обаятельный дизайнер в мире по мнению его мамы. Если вам требуется дизайн, сравнимый с красотой Вселенной, то Вы обратились по адресу. Он отличается креативным мышлением, а также оригинальным решением неоригинальных задач. Можно сказать, что в какой-то степени Георгий - дизайнерский джин, ведь он исполнит любой Ваш каприз за Ваши деньги.',
                        ['ui', 'ux', 'adobe photoshop', 'adobe illustrator', 'adobe xd', 'figma', 'axure', 'mobile design', 'adobe after effects', 'adobe animate', 'html', 'css'],
                        false,
                        [[['', ''], ['', '']], [['', ''], ['', '']]],
                        false,
                        [],
                        ['VirusHack', 'VK Hack'],
                        ['участник Cannes Lions во Франции', 'UX and Digital Design Week Лондон, Великобритания', 'G8 Москва, Россия', '8P Одесса, Украина']
                    ),
                    new Person('/img/employees/8.jpg',
                        'Мария Генчева',
                        'Дизайнер',
                        'Нужен уникальный стиль и креативный подход к делу? Тогда Вам к Маше! Она создает поистине настоящие шедевры.\n' +
                        'Мария - художник, привносящий новые краски и оттенки в ваши продукты, которые понравятся всем! Именно Маша сохранят приятную атмосферу в нашей команде.\n',
                        ['ui', 'ux', 'adobe photoshop', 'adobe illustrator', 'adobe xd', 'figma', 'axure', 'mobile design', 'adobe after effects', 'adobe animate', 'html', 'css'],
                        false,
                        [[['', ''], ['', '']], [['', ''], ['', '']]],
                        false,
                        [],
                        ['VirusHack'],
                        ['курс UI/UI design', 'prototyping (Lemon School)']
                    ),
                    new Person('/img/employees/7.jpg',
                        'Дарья Андреева',
                        'SMM',
                        'Даша - человек-соцсеть! Наш проводник в мире разных платформ, которые помогают нам стать известнее и ближе к нашей аудитории. Дарья всегда находится в курсе всех последних трендов Интернета и знает как в нём  правильно продвигаться, а это требует усидчивости, особой “чуйки” и понимания масс. Она строит мосты взаимопонимания между нашей аудиторией и студией.',
                        ['социальные навыки', 'идейность', 'smm продвижение', 'копирайтинг', 'анализирование', 'краткость', 'креативность'],
                        false,
                        [[['', ''], ['', '']], [['', ''], ['', '']]],
                        false,
                        [],
                        ['Одна четверка в аттестате', 'Суровый Питерский SMM 2019', 'Конвент Compot 2019'],
                        ['SMM benefit Molinos & Skillbox']
                    ),
                    new Person('/img/employees/11.jpg',
                        'Ярослав Мирошниченко',
                        'Ведущий Разработчик',
                        'Ярослав - невероятно талантливый и целеустремленный человек, обладающий уникальным складом ума. Тяга к сфере IT у Ярослава появилась ещё в старшей школе. Уже тогда он решил, что свяжет свою жизнь с информационными технологиями. Ярослав захотел превратить своё увлечение в дело всей жизни, что сейчас у него отлично получается. Даже сейчас Ярослав не прекращает совершенствоваться - в свободное от работы время он изучает большое количество технической литературы.',
                        ['back-end', 'front-end', 'bootstrap', 'database', 'c#', 'java', 'идейность', 'ответственность'],
                        true,
                        [[['/img/projects/main16.png', '/portfolio/13'], ['/img/projects/main17.png', '/portfolio/14']], [['/img/projects/main11.png', '/portfolio/15'], ['', '']]],
                        false,
                        [],
                        [],
                        ['Тренниг по java в компании Epam']
                    ),
                    new Person('/img/employees/9.jpg',
                        'Дарья Гаврилова',
                        'Менеджер',
                        'Дарья - душа нашей команды. Она помогает следить за деятельностью менеджеров, так как имеет немалый опыт в этой сфере, поэтому ее можно назвать полноценной правой рукой Фарруха. Даша обладает сильным характером, и это является огромным плюсом при работе с людьми, ведь деятельность менеджера - трудоемкий процесс, по сложности сравнимый с программированием. Помимо этого, Дарья всегда дружелюбна и пунктуальна.',
                        ['комуникабельность', 'идейность', 'Дизайн', 'полиглот', 'организованность', 'пунктуальность', 'отзывчивость'],
                        false,
                        [[['', ''], ['', '']], [['', ''], ['', '']]],
                        false,
                        ['Первенство Москвы по тхэквондо', 'Кубок Москвы по тхэквондо', 'Призер олимпиады по ИЗО'],
                        ['Прочитала 115 книг'],
                        ['Курс по маркетингу', 'Курс корейского языка при посольстве ', 'Курс на повышение бизнес квалификации английского языка в Лос-Анджелес, Калифорния']
                    ),
                    new Person('/img/employees/10.jpg',
                        'Александр Цымбалов',
                        'Разработчик',
                        'Путь в IT сферу для Александра был тернист и сложен. Сначала он занимался генной инженерией, но в какой-то момент он сменил эту сферу на биоинформатику, но она не была ему так интересна, поэтому начал заниматься программированием, в которое он буквально влюбился. Саша отдается этому делу полностью, получая от этого настоящее удовольствие.  Саша прекрасно освоил электрогитару, и своей игрой на ней он украшает наши совместные встречи.',
                        ['python', 'java', 'c#', 'microsoft azure', 'bots', 'django', 'back-end', 'искусственный интелект', 'vds', 'волонтер', 'эксперт', 'sql'],
                        false,
                        [[['', ''], ['', '']], [['', ''], ['', '']]],
                        false,
                        ['НТИ Искусственный интелект, финал', 'Сколково Junior Challenge'],
                        ['Ментор хакатона в ВШЭ', 'Ментор по Bots framework', 'Ai4Got', 'VirusHack', 'DH Hack', 'MemoryHack', 'CodeVersusCOVID19', 'Mитапе для Microsoft', 'Воркшоп в ВШЭ по SQL', 'Организатор IT игры', 'Дистанционный курс по SQL'],
                        ['Курсы МФТИ по глубокому обучения', 'Курсы Сбербанка по эконометрики']
                    ),
                    new Person('/img/employees/14.jpg',
                        'Кирилл Харланов',
                        'Менеджер',
                        'Если бы отзывчивость была человеком, то это был бы Кирилл. Он всегда готов помочь с каким- либо делом. Team building - ещё одна вещь, которой занимается Кирилл в нашем коллективе. Он часто предлагает яркие идеи для сплочения команды и нестандартные эффективные решения тех или иных вопросов в различных областях. Также, Кирилл отлично выстраивает «мосты понимания» между заказчиком и разработчиками, тем самым обеспечивая приятный и дружественный климат.',
                        ['коммуникабельность', 'отзывчивость', 'вежливость', 'исполнительность', 'идейность'],
                        false,
                        [[['', ''], ['', '']], [['', ''], ['', '']]],
                        false,
                        ['Победитель конференции "Шаг в экономические науки"', "4ое место на чемпионате Москвы по настольному теннису"],
                        ['VK Hack 2019'],
                        ['Выпускник технопарка "Калибр"']
                    ),
                    new Person('/img/employees/12.jpg',
                        'Вячеслав Рыжков',
                        'Разработчик',
                        '«Просто оно у меня хорошо получается, поэтому и занимаюсь им», - так говорит о программировании Вячеслав. Казалось бы, чего в этом необычного? Ответ прост - это его стиль. Только ему под силу преобразить замудренное и загруженное ТЗ в тот продукт, который зайдет любому привередливому заказчику:)',
                        ['web', 'android', 'back-end', 'parsing', 'dezign', 'верстка'],
                        true,
                        [[['/img/projects/main13.png', '/portfolio/9'], ['/img/projects/main14.png', '/portfolio/10']], [['/img/projects/main15.png', '/portfolio/12']]],
                        false,
                        ['НТИ Большие данные и машинное обучени', 'Финалист МОШ'],
                        ['Поисково-спасательный хакатон', 'SpringHack', 'VirusHack'],
                        ['Московская школа программистов']
                    ),
                    new Person('/img/employees/6.jpg',
                        'Диана Колпакова',
                        'Разработчик',
                        'О себе Диана говорит: "Я загораюсь идеей и добиваюсь её воплощения в жизнь. Мне нравится полностью отдаваться делу, которым занимаюсь, будь это учебный проект или заказ. Я одинаково эмоционально вкладываюсь в любую работу" Она делает упор на хард-скиллы, но считает софт-скиллы не менее важными. Любит работу в команде Sk.WebStudio',
                        ['back-end', 'front-end', 'android', 'java', 'kotlin', 'javascript', 'php', 'dart', 'c#'],
                        true,
                        [[['/img/projects/main7.png', '/portfolio/1'], ['/img/projects/main4.png', '/portfolio/2']], [['/img/projects/main8.png', '/portfolio/16']]],
                        false,
                        ['Девушки в IT'],
                        ['More.tech', 'BEST HACK', 'Media Hack', 'Craft Hack', 'GameHack', 'AR/CR Hack'],
                        ['IT школа Samsung', 'Binwell university', 'Школа IT решений КРОК 2018-2019', 'Школа IT решений КРОК 2019-2020', 'Школа IT менеджеров КРОК 2019-2020', 'Летняя школа КРОК', 'JavaRush', 'Developing Android Apps with Kotlin by Google', 'StartAndroid']
                    ),
                    new Person('/img/employees/13.jpg',
                        'Максим Дмитриев',
                        'Менеджер',
                        'Максим - это идеальный пример того, как в одном человеке может балансировать две роли: менеджер и разработчик. Он, как герой известных комиксов, утром работает менеджером, не скрывая себя, а вечером одевает теплое худи и превращается в самого настоящего разработчика, готового кодить ночами напролет. Это делает его подход к каждому заказу по-настоящему геройским, ведь для него это не просто типичный заказ, а продукт, который он узнает изнутри.',
                        ['работоспособность', 'структурированность', 'последовательность', 'bots', 'web', 'python', 'javascript', 'css'],
                        false,
                        [[['', ''], ['', '']], [['', ''], ['', '']]],
                        false,В
                        [],
                        ['LocalHackDay', 'DH Hack'],
                        ['Школа IT-решений']
                    )
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
        },
        mounted() {
            this.id = parseInt(this.$route.params.id) - 1;
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

    .description {
        max-width: 85%;
        padding: 15px 30px 15px 20px;
        margin: 30px 0 auto auto;
        background-color: $primary;
        box-shadow: 0px 5px 5px rgba(139, 116, 10, 0.3);
        color: $black-lighter;
        font-size: 18px;
        font-family: 'Open Sans';
        transform: translateX(10px);
    }

    .project_image_style{
        margin-right: 1.6vw;
        margin-bottom: 1.6vw;
        cursor: pointer;
        max-height: 25vw;
        max-width: 25vw;
    }

    .screenError {
        height: 100vh;
        width: 100vw;
        display: none;
        color: white;
        text-align: center;
        align-items: center;
        font-size: 4vh;
        background: url("/img/background.jpg") 100% 100%;
    }

    .about_person_style {
        color: #EBEBF0;
        font-family: "Open Sans";
        font-weight: 500;
        font-size: 2vh;
        margin: 0;
    }

    .about_text_style {
        color: #EBEBF0;
        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        font-size: 3vh;
        margin-top: 4.3vw;
        margin-right: 1vw;
    }

    .role_style {
        color: #FDDD48;
        font-family: "Open Sans";
        font-weight: 500;
        font-size: 2.5vh;
        margin: 0;
    }

    .competences_style {
        color: #EBEBF0;
        font-weight: 500;
        font-family: Oswald;
        letter-spacing: 0.03em;
        font-size: 2.5vh;
    }

    .name_style {
        color: #EBEBF0;
        font-family: "Open Sans";
        font-weight: 500;
        font-size: 4.5vh;
        margin-bottom: 0;
        margin-top: 0;
    }

    .p_competences_style {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: normal;
        font-size: 1.5vh;
        color: #EBEBF0;
        margin: 0;
        letter-spacing: 0.03em;
    }

    .text_event_style {
        background: #343545;
        padding: 0.9vw;
        display: flex;
        text-align: center;
        color: #EBEBF0;
        align-items: center;
        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        font-size: 2vh;
        margin-bottom: 1.2vw;
    }

    .button_style {
        background-color: $black-darker;
        color: #EBEBF0;
        font-family: Oswald;
        font-style: normal;
        font-weight: 500;
        font-size: 2.5vh;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: #EBEBF0;
        margin-right: 2.1vw;
        margin-top: 3.8vw;
    }

    button:focus {
        outline: none !important;
        color: #EBEBF0;
    }

    .main_division {
        padding: 3.6vw;
        display: flex;
        margin-top: 6vw;
        min-height: calc(100vh - 278px);
    }

    .left_information {
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }

    .right_information {
        flex: 2;
    }

    .image_event_style {
        max-height: 3.7vw;
        margin-right: 1.1vw;
    }

    .main_competences {
        display: flex;
    }

    .project_style1 {
        display: flex;
        flex-direction: column
    }

    .project_style2 {
        display: flex;
    }

    .competences {
        padding: 0.45vw;
        background: #343545;
        margin-right: 0.5vw;
        color: #EBEBF0;
    }

    .image_style {
        flex: 1;
        width: 90%;
    }

    .skills_style {
        flex: 3;
    }

    @media (max-width: 1000px) {
        .image_style {
            max-width: 80%;
        }
    }

    @media (max-width: 1250px) {
        .image_style {
            max-width: 80%;
        }
    }

    @media (max-width: 1200px) {
        .image_style {
            max-width: 90%;
        }
    }

    @media (max-width: 730px) {
        .main_division {
            display: none;
        }
        .screenError {
            display: flex;
        }
    }
    @media (max-height: 460px) {
        .main_division {
            display: none;
        }
        .screenError {
            display: flex;
        }
    }
</style>
