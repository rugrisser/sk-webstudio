<template>
    <div class="small_portfolio">
        <NavigationBar></NavigationBar>

        <div class="main_small_portfolio">
            <div class="right_panel">
                jdf
            </div>

            <div class="left_panel">
                <div>
                    {{portfolio[$route.params.id].nameOfProject}}
                </div>
            </div>
        </div>
        <!--<Footer></Footer>-->
    </div>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar";
    //import Footer from "@/components/Footer";

    class SmallPortfolio {
        constructor(nameOfProject, description, stack, pictures) {
            this.nameOfProject = nameOfProject;
            this.discription = description;
            this.stack = stack;
            this.pictures = pictures;
        }
    }



    export default {
        name: "SmallPortfolio",
        components: {
            //Footer,
            NavigationBar},
        data() {
            return {
                id: 0,
                portfolio: [
                    new SmallPortfolio(
                        'TradePlus',
                        'Этот сайт направлен на продажу медицинских изделий, услуг. Основной целевой аудиторией сайта являются медицинские учреждения. Сайт сконцентрирован на улучшении качества медицинского оборудования в Российской Федерации. Особенное в сложившийся ситуации с COVID19 подобный сайт будет приносить значимую прибыль',
                        ['HTML', 'SCSS', 'JavaScript', 'Vue'],
                        ['/img/Rectangle129', '/img/Rectangle130', '/img/Rectangle131']
                    )
                ]
            }
        },
    }
</script>

<style scoped>
    .small_portfolio{
        display: flex;
        flex-direction: column;
    }
    .main_small_portfolio{
        background-color: #252634;
        display: flex;
        flex-direction: row;
        min-height: 100vh;
    }
    .right_panel{
        flex: 1;
        margin-top: 12vh;
    }
    .left_panel{
        flex: 1;
        margin-top: 12vh;
    }

</style>