<template>
  <div class="person" id="main">
  <div class="screenError">
    В данный момент на сайте ведутся техническией работы. Пожалуйста, поспользуйтесь пк версией сайта
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
      <button class="button_style" id="button_1" style="margin-bottom: 30px; cursor: pointer" v-on:click="ShowProjects()">
        Проекты
      </button>
      <button class="button_style" id="button_2" style="color: #666; margin-bottom: 30px; cursor: pointer"
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
        <img :src="img[0]" v-on:click="OpenLink(img[1])" style="margin-right: 30px; margin-bottom: 30px; cursor: pointer">
        </div>
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
  <Footer />
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
            'Сооснователь / CIO',
            'Опора наших разработчиков и неимоверно талантливый человек, который участвовал в крупных проектах и в большом количестве хакатонов; был экспертом и на них, и в образовательных школах. Эмиль - один из самых ценных сотрудников, т.к. является разработчиком архитектур сложных приложений. Как же он пришёл в IT сферу? Это довольно-таки интересная история: после расставания с девушкой, он хотел взломать ее социальную сеть, но при этом не понимая даже причину, сподвигшую его на это действие. Но Эмиль на тот момент не имел нужных навыков в программировании, был полным нулем в этом деле. Поэтому он начал изучать программирование: начинал с самого простого, а спустя несколько месяцев отправил заявку в одну фирму, которую приняли спустя два месяца. Ему было тяжеловато работать, так как это был его первый опыт. Но, благодаря этому, преуспел  в программировании, а вскоре это дело ему полюбилось и он ушёл в него с головой. Сейчас мы очень благодарны сложившимся обстоятельствам, так как, если бы не эта ситуация, то может быть,  Эмиль никогда бы не стал браться за программирование. ',
            ['back-end', 'android', 'web', 'ml', 'bots', 'database', 'java', 'kotlin', 'javascript', 'php', 'lua', 'c++', 'c#', 'sql', 'vue', 'spring', 'идейность', 'организованность'],
            true,
            [[["/img/projects/Rectangle46.png", '/'], ["/img/projects/Rectangle42.png", '/']], [["/img/projects/Rectangle43.png", '/'], ["/img/projects/Rectangle45.png", '/']], [["/img/projects/Rectangle41.png", '/'], ["/img/projects/Rectangle44.png", '/']]],
            false,
            ['НТИ Искусственный интеллект финал', 'НТИ Большие данные и машинное обучение финал'],
            ['BestHack', 'MediaHack', 'SpringHack', 'GameHack', 'Поисково-спасательный хакатон', 'DH Hack'],
            ['Тинькофф ML', 'Тинькофф DL', 'Samsung IT-School']
          ),
          new Person('/img/employees/15.jpg',
            'Вадим Циндяйкин',
            'Ведущий Разработчик',
            'Гениален не по годам – это точно про Вадима! Еще в юные годы он показывал себя в точных науках, что в дальнейшем привело его в сферу IT и не прогадал, так как таких умов, как у него, тяжело сыскать. Но ум и талант еще не все! Вадим крайне трудолюбивый человек, который может сутками напролет работать, и при этом качество его работы остается на должном уровне. Вадим - корень трудолюбия нашей команды!',
            ['back-end', 'android', 'bots', 'java', 'javascript', 'spring', 'django', 'flask', 'scala'],
            true,
            [[['', ''], ['', '']], [['', ''], ['','']]],
            false,
            ['Кейс-лаборатория КРОК'],
            ['Летняя практика КРОК', 'Сколково хакатон', 'DH HAck'],
            ['Школа IT-Решений']
          ),
          new Person('/img/employees/1.jpg',
            'Владимир Яфаров',
            'Основатель студии / SEO',
            'Владимир - невероятно чуткий руководитель, обладающий всеми качествами настоящего предпринимателя, такими, как неимоверное трудолюбие, идейность, ярое чувство долга и ответственности, а самое главное - преданность своему делу! Вова крайне харизматичный человек, в самом хорошем смысле слова, что видно по его речи и манере поведения. Ему не так трудно найти общий язык с человеком и быть на одной волне с ним. Он умеет находить подход к каждому сотруднику, а в нужный момент, он окажет моральную поддержку. Но при этом, видит грань между работой и личной жизнью. В первую очередь, для Владимира, компания Sk.Webstudio - это объединение творческих и сильных ребят, которые способны создавать уникальные продукты, не имеющие аналогов в мире. На первое место Вова поставил коллектив и не прогадал. Он вместе с Эмилем собрали команду из самых инициативных и сильных специалистов. Кроме того, отличительной чертой нашей команды является то, что мы дорожим нашей репутацией.',
            ['bots', 'android', 'ml', 'комуникабельность', 'ответственность', 'харизматичность', 'любознательность', 'лидерские качества'],
            true,
            [[['', ''], ['', '']], [['', ''], ['','']]],
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
            [[['', ''], ['', '']], [['', ''], ['','']]],
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
            [[['', ''], ['', '']], [['', ''], ['','']]],
            false,
            ["Школа реальных дел", "Школа IT решений",  "World Skills Machine Learning", "Инженеры будущего", "Кейс-лаборатория КРОК"],
            ["BestHAck", "DH Hack", "Хакатон ФЦК", "AR/CS Hack", "Game Hack (Геккон)", "Game Hack (MSP)", "Дата журналистика", "Школьный хакатон"],
            ["Samsung IT school", "Яндекс.Лицей", "Летняя практика в КРОК"]
          ),
          new Person('/img/employees/5.jpg',
            'Георгий Шишов',
            'Дизайнер',
              'Георгий - самый обаятельный дизайнер в мире по мнению его мамы. Если вам требуется дизайн, сравнимый с красотой Вселенной, то Вы обратились по адресу. Жора отличается креативным мышлением, оригинальным решением неоригинальных задач. Даже, можно сказать, что, в какой-то степени, Георгий - дизайнерский джин, ведь он исполнит любой каприз за ваши деньги ;)',
              ['ui', 'ux', 'adobe photoshop', 'adobe illustrator', 'adobe xd', 'figma', 'axure', 'mobile design', 'adobe after effects', 'adobe animate', 'html', 'css'],
            true,
            [[['', ''], ['', '']], [['', ''], ['','']]],
            false,
            [],
            ['VirusHack', 'VK Hack'],
            ['участник Cannes Lions во Франции', 'UX and Digital Design Week Лондон, Великобритания', 'G8 Москва, Россия', '8P Одесса, Украина']
          ),
          new Person('/img/employees/8.jpg',
            'Мария Генчева',
            'Дизайнер',
            'Нужен уникальный стиль и креативный подход к делу? Тогда Вам к Маше! Она создает поистине настоящие шедевры, достойные соперничества с Лебедем :) Мария - художник, придающий новые краски и оттенки в наши продукты, которыми сразит всех наповал. В нашем коллективе не так много девушек, но именно они являются хранителями приятной атмосферы и очага нашей команды.',
            ['ui', 'ux', 'adobe photoshop', 'adobe illustrator', 'adobe xd', 'figma', 'axure', 'mobile design', 'adobe after effects', 'adobe animate', 'html', 'css'],
            true,
            [[['', ''], ['', '']], [['', ''], ['','']]],
            false,
            [],
            ['VirusHack'],
            ['курс UI/UI design', 'prototyping (Lemon School)']
          ),
          new Person('/img/employees/7.jpg',
            'Дарья Андреева',
            'SMM',
            'Человек - социальная сеть! Наш проводник в мире разных платформ, которые помогают нам стать известнее и ближе к нашей лояльной аудитории. Дарья знает все последние тренды в мире Интернета и как в нем правильно продвигаться, а это требует усидчивости и особой “чуйки”: не так просто понять, чего они хотят. А точнее чего они хотят и как это должно выглядеть. Она строит мосты взаимопонимания между аудиторией и нашей студией. кроме этого Даша также принимает участие в создании климата команды, как и другие представительницы прекрасного пола.',
            ['социальные навыки', 'идейность', 'smm продвижение', 'копирайтинг', 'анализирование', 'краткость', 'креативность'],
            false,
            [[['', ''], ['', '']], [['', ''], ['','']]],
            false,
            [],
            ['Одна четверка в аттестате', 'Суровый Питерский SMM 2019', 'Конвент Compot 2019'],
            ['SMM benefit Molinos & Skillbox']
          ),
          new Person('/img/employees/11.jpg',
            'Ярослав Мирошниченко',
            'Ведущий Разработчик',
            'Невероятно талантливый и целеустремленный человек, обладающий уникальным складом ума. Тяга к знаниям в сфере IT у Ярослава началась ещё в старшей школе. Уже тогда он решил, что свяжет свою жизнь с информационными технологиями. Ярослав захотел превратить своё увлечение в дело всей его жизни, что сейчас у него отлично получается. В свободное от работы время, Ярослав пополняет свои знания, изучая техническую литературу. ',
            ['back-end', 'front-end', 'bootstrap', 'database', 'c#', 'java', 'идейность', 'ответственность'],
            true,
            [[['', ''], ['', '']], [['', ''], ['','']]],
            false,
            [],
            [],
            ['Тренниг по java в компании Epam']
          ),
          new Person('/img/employees/9.jpg',
            'Дарья Гаврилова',
            'Менеджер',
            'Дарья - душа нашей команды. Уже имея опыт в сфере менеджмента, она помогает следить за деятельностью менеджеров. Даша обладает сильным характером, что является огромным плюсом при работе с людьми, ведь деятельность менеджера - трудоемкий процесс, сравнимый с программированием. Помимо сильного характера, Дарья проявляет дружелюбность, пунктуальность, предусмотрительность по отношению к команде. Также она является генератором уникальных идей, улучшающих качество работы сотрудников и веб-студии в целом.',
            ['комуникабельность', 'идейность', 'Дизайн', 'полиглот', 'организованность', 'пунктуальность', 'отзывчивость'],
            false,
            [[['', ''], ['', '']], [['', ''], ['','']]],
            false,
            ['Первенство Москвы по тхэквондо', 'Кубок Москвы по тхэквондо', 'Призер олимпиады по ИЗО'],
            ['Прочитала 115 книг'],
            ['Курс по маркетингу', 'Курс корейского языка при посольстве ', 'Курс на повышение бизнес квалификации английского языка в Лос-Анджелес, Калифорния']
          ),
          new Person('/img/employees/10.jpg',
            'Александр Цымбалов',
            'Разработчик',
            'Путь в IT сферу Александра был тернист и сложен. Сначала он занимался генной инженерией, но спустя некоторое время он сменил сферу на биоинформатику.После разочарования в биоинформатике он влюбился в программирование и теперь уходит в это дело с головой. Кстати, Саша является одним из немногих людей в нашей студии, кто умеет играть на музыкальных инструментах. Душу человека он цепляет струнами своей электрогитары.',
            ['python', 'java', 'c#', 'microsoft azure', 'bots', 'django', 'back-end', 'искусственный интелект', 'vds', 'волонтер', 'эксперт', 'sql'],
            true,
            [[['', ''], ['', '']], [['', ''], ['','']]],
            false,
            ['НТИ Искусственный интелект, финал', 'Сколково Junior Challenge'],
            ['Ментор хакатона в ВШЭ', 'Ментор по Bots framework', 'Ai4Got', 'VirusHack', 'DH Hack', 'MemoryHack', 'CodeVersusCOVID19', 'Mитапе для Microsoft', 'Воркшоп в ВШЭ по SQL', 'Организатор IT игры', 'Дистанционный курс по SQL'],
            ['Курсы МФТИ по глубокому обучения', 'Курсы Сбербанка по эконометрики']
          ),
          new Person('/img/employees/14.jpg',
            'Кирилл Харланов',
            'Менеджер',
              'Если бы отзывчивость была человеком, то это был бы Кирилл. Он всегда готов помочь с каким- либо делом. Team building - ещё одна вещь, которой занимается Кирилл в нашем коллективе. Он часто предлагает яркие идеи для сплочения команды и нестандартные эффективные решения тех или иных вопросов в различных областях. Также, Кирилл отлично выстраивает «мосты понимания» между заказчиком и разработчиками, тем самым обеспечивая приятный и дружественный климат.',
            ['коммуникабельность', 'отзывчивость','вежливость', 'исполнительность', 'идейность'],
            false,
            [[['', ''], ['', '']], [['', ''], ['','']]],
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
            [[['', ''], ['', '']], [['', ''], ['','']]],
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
            [[['', ''], ['', '']], [['', ''], ['','']]],
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
            [[['', ''], ['', '']], [['', ''], ['','']]],
            false,
            [''],
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

  .screenError{
  display: none;
  color: red;
  background: #FFFFFF;
  }

  .about_person_style{
  color: #EBEBF0;
  font-family: "Open Sans";
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
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin: 0
  }

  .competences_style{
  color: #EBEBF0;
  font-weight: 500;
  font-family: Oswald;
  letter-spacing: 0.03em;
  font-size: 18px;
  }

  .name_style{
  color: #EBEBF0;
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 50px;
  line-height: 43px;
  margin-bottom:10px;
  margin-top:0
  }

  .p_competences_style{
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #EBEBF0;
  margin: 0;
  letter-spacing: 0.03em;
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
  margin-top: 80px;
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
  width: 90%;
  }

  .skills_style {
  flex: 3;
  }

  @media (max-width: 767px) {
  .main_division {
    display: none;
  }
  .screenError{
    position: absolute;
    z-index: 200;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
  }
  }
  @media (max-height: 473px) {
  .main_division {
    display: none;
  }
  .screenError{

    position: absolute;
    z-index: 200;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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