<template>
    <div class="portfolio">
        <NavigationBar/>
        <section class="container-fluid portfolio-greeting w-100 d-flex  flex-column flex-wrap">
            <h1 class="greeting-header">{{portfolios[$route.params.id - 1].mainAppHeader}}</h1>
            <div class="greeting-content">
                <img class="greeting-img"
                     :src="portfolios[$route.params.id - 1].mainAppImage"/>
                <div class="greeting-description">
                    <p>{{portfolios[$route.params.id - 1].mainAppInfo}}</p>
                    <div class="d-inline-flex justify-content-start graphic-editor-list">
                        <img v-for="graphicEditor in portfolios[$route.params.id - 1].graphicEditors"
                             :key="graphicEditor"
                             :src="graphicEditor" class="graphic-editor"/>
                    </div>
                </div>
            </div>
        </section>
        <section class="container-fluid block">
            <div class="block-title">
                <div class="block-sub-header d-inline-flex">
                    <span>Задача</span>
                    <hr/>
                </div>
                <p class="block-header">Что нужно было сделать?</p>
            </div>
            <div class="block-description" id="why-description">
                <p>{{portfolios[$route.params.id - 1].what}}</p>
            </div>
            <carousel>
                <slide v-for="app in portfolios[$route.params.id - 1].appPhotos" :key="app"
                       class="d-flex flex-row justify-content-center">
                    <img class="app-img"
                         :src="app"/>
                </slide>
            </carousel>
        </section>
        <section class="container-fluid block">
            <div class="block-title">
                <div class="block-sub-header d-inline-flex">
                    <span>Решение</span>
                    <hr class="ml-3"/>
                </div>
                <p class="block-header">Как мы это делали?</p>
            </div>
            <div class="block-description">
                <p>{{portfolios[$route.params.id - 1].how}}</p>
            </div>
        </section>
        <section class="container-fluid block" v-if="portfolios[$route.params.id-1].video">
            <div class="block-title">
                <div class="block-sub-header d-inline-flex">
                    <span>Результат</span>
                    <hr class="ml-3"/>
                </div>
                <p class="block-header">Что у нас получилось?</p>
            </div>
            <div class="d-flex justify-content-center">
                <video controls="controls">
                    <source :src="portfolios[$route.params.id - 1].video"/>
                </video>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
    import NavigationBar from "../components/NavigationBar";
    import Footer from "../components/Footer";
    import {Carousel, Slide} from "vue-carousel";

    class Portfolio {
        constructor(mainAppHeader, mainAppInfo, what, how, mainAppImage, graphicEditors, appsPhotos, video) {
            this.what = what;
            this.how = how;
            this.mainAppHeader = mainAppHeader;
            this.mainAppInfo = mainAppInfo;
            this.mainAppImage = mainAppImage;
            this.graphicEditors = graphicEditors;
            this.appPhotos = appsPhotos;
            this.video = video;
        }
    }

    export default {
        name: "Portfolio.vue",
        components: {Slide, Carousel, Footer, NavigationBar},
        data() {
            return {
                portfolios: [
                    new Portfolio(
                        "Подготовка в медицинским тестам",
                        "Помогает студентам и преподавателям более тщательно подготовиться к медицинским тестам, а также к семинарам. Это призвано помогать студентам с учебой, способствовать более простому и быстрому усвоению материала в такой сложной и важной науке, как медицина. Благодаря этому приложению студент тратит меньше времени на подготовку к тестам, а уровень сдачи тестов остается на том же уровне. Таким образом студент учится эффективнее.",
                        "Реализовать приложение. Необходимо было создать полноценный it продукт, включающий в себя все этапы разработки: начиная от продумывания сложной архитектуры, заканчивая чтением и разбирательством в чужом коде - что является не самой легкой работой. Необходимо было подумать и о будущих пользователях приложения, и проникнуться в азы  медицины",
                        "Во время работы над данным кейсом программист столкнулся с некоторыми затруднениями. Так, например, уже после начала работы над проектом выяснилось, что код, который предоставил изначально заказчик, был написан плохо, его было очень сложно поддерживать. Поэтому программистом было принято решение начать проект с нуля и реализовать его сразу качественно, чтобы в дальнейшем не было проблем с поддержкой. Для этого программист продумал и реализовал по-новой архитектуру всего it приложения. Помимо этого программист нарисовал и воплотил в жизнь новый, более юзабилити дизайн. В итоге получился полноценный продукт, которым и по сей день пользуются люди ",
                        "/img/projects/diana_1_1.jpg",
                        [

                        ],
                        [
                            '/img/projects/diana_1_1.jpg', '/img/projects/diana_1_2.jpg', '/img/projects/diana_1_3.jpg', '/img/projects/diana_1_4.jpg', '/img/projects/diana_1_5.jpg',
                            '/img/projects/diana_1_6.jpg'
                        ],
                        ""
                    ),
                    new Portfolio(
                        "LinkBridge",
                        "Создание сайта для передачи ссылки более легким путем тем самым сэкономив вообще драгоценное время .\n" +
                        "\n" +
                        "В данном кейсе программисту необходимо было реализовать не просто IT продукт, а полноценный стартап. Необходимо было провести анализ рынка, подтвердить проблему в обществе. Была проведена полноценная подготовительная работа. Уже после нее был составлен концепт приложения. \n" +
                        "Продукт создавался для определенного круга лиц, именно поэтому получилось сделать максимально удобный и friendly интерфейс.  Идея заключалась в удобной и быстрой передачи ссылки с одного устройства на другой. Основная задача - сделать так, чтобы человек не задумывался о действиях, не тратил драгоценное время\n",
                        "Создание буфера обмена ссылками. \n" +
                        "Необходимо было охватить максимальное количество пользователей, поэтому были реализованы приложения и для платформы ios, и для платформы android. Помимо этого необходимо было реализовать сайт связки и передачи информации между устройствами. \n",
                        "Сделать по сайтам ,как страницы наследники.\n" +
                        "Во время выполнения данного кейса исполнителю пришлось затронуть большое количество областей программирования. Так, необходимо было разрабатывать приложения под 2 различные платформы, написать сайт и реализовать back-end на php. Помимо этого программист принимал активное участие в маркетинге данного продукта. Зато теперь тот круг людей, который нуждался в данном продукте, может быть спокоен, ведь продукт был реализован специально для максимального их удобства. В то же время в продукте не планируется добавление рекламы или других вещей, которые могут отпугнуть пользователя и испортить в целом картину о продукте. Программисту было важно именно изменить мир, а не просто заработать на этом денег.\n",
                        "/img/projects/diana_2_4.jpg",
                        [],
                        ['/img/projects/diana_2_4.jpg', '/img/projects/diana_2_3.jpg', '/img/projects/diana_2_2.jpg', '/img/projects/diana_2_1.jpg'],
                        ""
                    ),
                    new Portfolio(
                        "SlidesCatizer",
                        "IT приложение для добавление в презентации картинок из брендбука вашей компании. Приложение было разработано на примерах котиков. Ведь котики захватят весь мир :) В дальнейшем достаточно просто поменять котиков на картинки из Вашего брендбука",
                        "Разработать полноценное IT приложение для добавления определенных картинок (котиков) в Вашу презентацию. Необходимо создать максимально юзер френдли приложение.Разработать полноценное IT приложение для добавления определенных картинок (котиков) в Вашу презентацию. Необходимо создать максимально юзер френдли приложение.",
                        "Мы проработали несколько различных платформ и остановились на веб сайте. Таким образом мы максимально сократили время изменения картинок. Помимо этого вам в принципе нет необходимости взаимодействовать с брендбуком и презентациями, т.к. приложение само добавит картинки.",
                        "",
                        [],
                        [

                        ],
                        false

                    ),
                    new Portfolio(
                        "",
                        "",
                        "",
                        "",
                        "",
                        [],
                        [],
                        ""
                    )
                ]
            }
        }
    }

</script>

<style scoped lang="scss">
    html {
        overflow-x: hidden;
    }

    header {
        background-color: #1C1D2A;
    }

    p {
        font-family: "Open Sans";
    }

    .portfolio {
        position: absolute;
        width: 100%;
        background-color: $black-darker;
        background-image: url("/img/background/PortfolioBG.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .portfolio-greeting {
        margin-top: 15%;
        background-color: #1C1D2A;
        padding: 0 10% 5% 10%;
    }

    .portfolio-greeting p {
        color: #EBEBF0;
        font-size: 1.27vw;
        opacity: 85%;
    }

    .greeting-description {
        display: flex;
        flex-direction: column;
        margin-left: 5%;
        max-width: 50%;
    }

    .greeting-content {
        display: flex;
        flex-direction: row;
    }

    .greeting-img {
        position: relative;
        width: 50%;
        height: 36%;
    }

    .graphic-editor-list {
        margin-top: auto;
    }

    .graphic-editor {
        max-width: 15%;
        margin-right: 10%;
        margin-top: auto;
    }

    .block {
        margin-top: 10%;
    }

    .block-title {
        margin-left: 10%;
    }

    .block-header {
        color: #EBEBF0;
        font-size: 4vw;
        margin-top: 0;
        font-family: Oswald;
    }

    .block-sub-header {
        color: #FDDD48;
        font-size: 2vw;
        opacity: 90%;
        width: 20%;
        font-family: "Open Sans";
    }

    .block-sub-header hr {
        color: #FDDD48;
        height: 1px;
        width: 80%;
        margin-left: 10%;
        margin-top: auto;
    }

    .greeting-header {
        color: #ffffff;
        font-size: 4vw;
    }

    .block-description {
        color: #EBEBF0;
        max-width: 50%;
        font-size: 1.3vw;
        margin-left: auto;
        margin-right: auto;
    }

    .block-description p {
        opacity: 85%;
    }

    .app-img {
        max-width: 50%;
        margin-right: 10%;
    }

    video {
        position: relative;
        margin-bottom: 10%;
        width: 60%;
        max-height: 100%;
    }

    #why-description {
        margin-bottom: 10%;
    }

    @media (max-width: 768px) {
        .greeting-content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .greeting-header {
            margin-left: auto;
            margin-right: auto;
        }
        .greeting-img {
            max-width: 100%;
            height: auto;
        }
        .greeting-description {
            margin-left: 0;
        }
    }
</style>