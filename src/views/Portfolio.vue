<template>
    <div class="portfolio">
        <NavigationBar />
        <section class="container-fluid portfolio-greeting w-100 d-flex flex-column flex-wrap">
            <h1 class="greeting-header">Hello Neighbour app</h1>
            <div class="greeting-content">
                <img class="greeting-img"
                     src="https://s3-alpha-sig.figma.com/img/6c7f/d3e3/7bf38387a6615915d2554ad0cd2a1a5d?Expires=1590364800&Signature=UWKceI1e1VrRzpnKM0jcmUgb0ZamMoRn9kCKw~28iUOLTEQQ4wEDDJpa~7zP5J5zQ-g6JyEDJA28Ad1aYcyTZxQKLdO8O9SZr6liRVsHmUrbHsX~Oots6W-ZoIc-getgqF2be~~v6BvXyodcugLuy5KrPhiLAjZ4i8BQSuASwxrcE14fgW3fzSdpXJ5SlDEXhfDREMsljoWkeocP5fl8Ius1Tdqj0rmah8qNIRJ~IA0sZKuOMgoSAHHVm2M6DggeAX-f1y7giE0r3-gU1mZlqP4~1BSNb4kJQVHZ~kBl5RueE4UENJn5a6LjKYEVuyTecsCayKV1aD6J5jky0YP9Ww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA  "/>
                <div class="greeting-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <div class="d-inline-flex justify-content-start graphic-editor-list">
                        <img v-for="graphicEditor in graphicEditors" :key="graphicEditor"
                             :src="graphicEditor" class="graphic-editor"/>
                    </div>
                </div>
            </div>
        </section>
        <section class="container block">
            <div class="block-sub-header d-inline-flex">
                <span>Задача</span>
                <hr class="ml-3"/>
            </div>
            <p class="block-header">Что нужно было сделать?</p>
            <div class="block-description" id="why-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
                    dolor
                    sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
            </div>
            <carousel>
                <slide v-for="app in apps" :key="app" class="d-flex flex-row justify-content-center">
                        <img class="app-img"
                             :src="app"/>
                </slide>
            </carousel>
        </section>
        <section class="container block">
            <div class="block-sub-header d-inline-flex">
                <span>Решение</span>
                <hr class="ml-3"/>
            </div>
            <p class="block-header">как мы это делали?</p>
            <div class="block-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
                    dolor
                    sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
            </div>
        </section>
        <section class="container block">
            <div class="block-sub-header d-inline-flex">
                <span>Результат</span>
                <hr class="ml-3"/>
            </div>
            <p class="block-header">Что у нас получилось?</p>
            <div class="d-flex justify-content-center">
                <video width="920" controls="controls" height="518">
                    <source src="https://youtu.be/S7xq9x8i47k"/>
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

    export default {
        name: "Portfolio.vue",
        components: {Slide, Carousel, Footer, NavigationBar},
        data() {
            return {
                graphicEditors: [
                    "https://s3-alpha-sig.figma.com/img/a510/ad58/1c44a0efe05a6d99bb8b9fece8a7064c?Expires=1590364800&Signature=LMy5J8cc1zgavLLVIJERt4rb8unDvDK6SSjoLZN3dlP3XDS78sit1wMDZSckcSvRT~W4ScaVL9UDjPee2cexqFZ3Oa3aGzf5LrYaQ80sk0fta3jDvcLZZHvz4qL2NO25~Fbbn7Wqy7IRtUPOF8jolZPm5IiDUlxcwoP2JOkplBOmXX2liOD-J93SRavLdA-uBXlk~wpeA5rpRdBaI3lu4fWIUbnYIuERFUkadlpMwvH~ScXNfcAAaPIeb8Pd~jBJL9OIk83jZvo48IOYn7qTBA5DrfPcw-HNg6UhLImO000q5zTryJgiLtbVwAcbejGwFCiQIGyU0agOQL3LgjEsIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    "https://s3-alpha-sig.figma.com/img/a510/ad58/1c44a0efe05a6d99bb8b9fece8a7064c?Expires=1590364800&Signature=LMy5J8cc1zgavLLVIJERt4rb8unDvDK6SSjoLZN3dlP3XDS78sit1wMDZSckcSvRT~W4ScaVL9UDjPee2cexqFZ3Oa3aGzf5LrYaQ80sk0fta3jDvcLZZHvz4qL2NO25~Fbbn7Wqy7IRtUPOF8jolZPm5IiDUlxcwoP2JOkplBOmXX2liOD-J93SRavLdA-uBXlk~wpeA5rpRdBaI3lu4fWIUbnYIuERFUkadlpMwvH~ScXNfcAAaPIeb8Pd~jBJL9OIk83jZvo48IOYn7qTBA5DrfPcw-HNg6UhLImO000q5zTryJgiLtbVwAcbejGwFCiQIGyU0agOQL3LgjEsIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    "https://s3-alpha-sig.figma.com/img/a510/ad58/1c44a0efe05a6d99bb8b9fece8a7064c?Expires=1590364800&Signature=LMy5J8cc1zgavLLVIJERt4rb8unDvDK6SSjoLZN3dlP3XDS78sit1wMDZSckcSvRT~W4ScaVL9UDjPee2cexqFZ3Oa3aGzf5LrYaQ80sk0fta3jDvcLZZHvz4qL2NO25~Fbbn7Wqy7IRtUPOF8jolZPm5IiDUlxcwoP2JOkplBOmXX2liOD-J93SRavLdA-uBXlk~wpeA5rpRdBaI3lu4fWIUbnYIuERFUkadlpMwvH~ScXNfcAAaPIeb8Pd~jBJL9OIk83jZvo48IOYn7qTBA5DrfPcw-HNg6UhLImO000q5zTryJgiLtbVwAcbejGwFCiQIGyU0agOQL3LgjEsIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                ],
                apps: [
                    "https://s3-alpha-sig.figma.com/img/1f78/ad05/0c5651bf9d7b3af08a3bbe3704c3ec7d?Expires=1590364800&Signature=XVxy8qF64atVeM~b83Q~i0Ta6W-yGKGdKIKiIuOON~CsgalpDHe27rJmRfr20EE~AFCZ2kWZiIv6lqIUwOGu-sdvKKlRXtH5HrjyFCW0aqhJxBqxS-eJoI~4l-qUNWvbkfscaBn7D-614O7qnyGDtViCGegxmz4mrS8Zji2zviPWqGYjJrDPSlqp~xyjhceHfPU9GB77Ny~buBa-FlEUy-jO2tILnamweCwiR~VBpThwIeFmpmdMwK-G9WZutt5t8x-2mcxIKVlokEU6u1gi7CNdVGc4DdDqqRv1XTBJKO8QVojpQ4y-leurzyYnItoQ7D97U6n1tBAQZSiJo2F8Yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    "https://s3-alpha-sig.figma.com/img/1f78/ad05/0c5651bf9d7b3af08a3bbe3704c3ec7d?Expires=1590364800&Signature=XVxy8qF64atVeM~b83Q~i0Ta6W-yGKGdKIKiIuOON~CsgalpDHe27rJmRfr20EE~AFCZ2kWZiIv6lqIUwOGu-sdvKKlRXtH5HrjyFCW0aqhJxBqxS-eJoI~4l-qUNWvbkfscaBn7D-614O7qnyGDtViCGegxmz4mrS8Zji2zviPWqGYjJrDPSlqp~xyjhceHfPU9GB77Ny~buBa-FlEUy-jO2tILnamweCwiR~VBpThwIeFmpmdMwK-G9WZutt5t8x-2mcxIKVlokEU6u1gi7CNdVGc4DdDqqRv1XTBJKO8QVojpQ4y-leurzyYnItoQ7D97U6n1tBAQZSiJo2F8Yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    "https://s3-alpha-sig.figma.com/img/1f78/ad05/0c5651bf9d7b3af08a3bbe3704c3ec7d?Expires=1590364800&Signature=XVxy8qF64atVeM~b83Q~i0Ta6W-yGKGdKIKiIuOON~CsgalpDHe27rJmRfr20EE~AFCZ2kWZiIv6lqIUwOGu-sdvKKlRXtH5HrjyFCW0aqhJxBqxS-eJoI~4l-qUNWvbkfscaBn7D-614O7qnyGDtViCGegxmz4mrS8Zji2zviPWqGYjJrDPSlqp~xyjhceHfPU9GB77Ny~buBa-FlEUy-jO2tILnamweCwiR~VBpThwIeFmpmdMwK-G9WZutt5t8x-2mcxIKVlokEU6u1gi7CNdVGc4DdDqqRv1XTBJKO8QVojpQ4y-leurzyYnItoQ7D97U6n1tBAQZSiJo2F8Yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    "https://s3-alpha-sig.figma.com/img/1f78/ad05/0c5651bf9d7b3af08a3bbe3704c3ec7d?Expires=1590364800&Signature=XVxy8qF64atVeM~b83Q~i0Ta6W-yGKGdKIKiIuOON~CsgalpDHe27rJmRfr20EE~AFCZ2kWZiIv6lqIUwOGu-sdvKKlRXtH5HrjyFCW0aqhJxBqxS-eJoI~4l-qUNWvbkfscaBn7D-614O7qnyGDtViCGegxmz4mrS8Zji2zviPWqGYjJrDPSlqp~xyjhceHfPU9GB77Ny~buBa-FlEUy-jO2tILnamweCwiR~VBpThwIeFmpmdMwK-G9WZutt5t8x-2mcxIKVlokEU6u1gi7CNdVGc4DdDqqRv1XTBJKO8QVojpQ4y-leurzyYnItoQ7D97U6n1tBAQZSiJo2F8Yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    "https://s3-alpha-sig.figma.com/img/1f78/ad05/0c5651bf9d7b3af08a3bbe3704c3ec7d?Expires=1590364800&Signature=XVxy8qF64atVeM~b83Q~i0Ta6W-yGKGdKIKiIuOON~CsgalpDHe27rJmRfr20EE~AFCZ2kWZiIv6lqIUwOGu-sdvKKlRXtH5HrjyFCW0aqhJxBqxS-eJoI~4l-qUNWvbkfscaBn7D-614O7qnyGDtViCGegxmz4mrS8Zji2zviPWqGYjJrDPSlqp~xyjhceHfPU9GB77Ny~buBa-FlEUy-jO2tILnamweCwiR~VBpThwIeFmpmdMwK-G9WZutt5t8x-2mcxIKVlokEU6u1gi7CNdVGc4DdDqqRv1XTBJKO8QVojpQ4y-leurzyYnItoQ7D97U6n1tBAQZSiJo2F8Yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
        background-image: url("/img/background/6fd774d7a0ab9193.svg");
        background-position: center;
    }

    .portfolio-greeting {
        margin-top: 100px;
        background-color: #1C1D2A;
        padding: 50px 140px 50px 140px;
    }

    .portfolio-greeting p {
        color: #EBEBF0;
        font-size: 18px;
        opacity: 85%;
    }

    .greeting-description {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
    }

    .greeting-content {
        display: flex;
        flex-direction: row;
    }

    .greeting-img {
        position: relative;
        width: 540px;
        height: 390px;
    }

    .graphic-editor-list {
        margin-top: auto;
    }

    .graphic-editor {
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }

    .block {
        margin-top: 130px;
    }

    .block-header {
        color: #EBEBF0;
        font-size: 48px;
        margin-top: 0;
        font-family: Oswald;
    }

    .block-sub-header {
        color: #FDDD48;
        font-size: 24px;
        opacity: 90%;
        font-family: "Open Sans";
    }

    .block-sub-header hr {
        color: #FDDD48;
        height: 1px;
        width: 80px;
    }

    .greeting-header {
        color: #ffffff;
        font-size: 48px;
    }

    .block-description {
        color: #EBEBF0;
        max-width: 540px;
        font-size: 18px;
        margin-left: auto;
        margin-right: auto;
    }

    .block-description p {
        opacity: 85%;
    }

    .app-img {
        width: 350px;
        height: 300px;
        margin-right: 10px;
    }

    video {
        position: relative;
        margin-bottom: 100px;
    }

    #why-description {
        margin-bottom: 140px;
    }
    
    @media (max-width: 768px) {
        .greeting-content {
            display: flex;
            flex-direction: column;
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