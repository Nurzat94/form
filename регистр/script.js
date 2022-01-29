let $name = document.querySelector('#name')
let $password = document.querySelector('#password')
let $buttonIn = document.querySelector('#buttonIn')
let $buttonSearch = document.querySelector('#buttonSearch')
let $findName = document.querySelector('#findName')
let users = [
    {
        name: 'Emirlan',
        password: '1234'
    },
    {
        name: 'Emirlan',
        password: 'ajhdsjk'
    },
    {
        name: 'Nurdan',
        password: 'jdu123'
    },
    {
        name: 'Nurzat',
        password: '12sdhsk34'
    },
    {
        name: 'Bekzat',
        password: '12sadasd34'
    }
]
let person = {}
$buttonIn.addEventListener('click',function(){
    person = {}
    person.name = $name.value
    person.password = $password.value
    users.push(person)
    $name.value = ''
    $password.value = ''
    localStorage.clear()
    localStorage.setItem('users',JSON.stringify(users))

})
$buttonSearch.addEventListener('click',function(){
    let list = localStorage.getItem('users')
    let listParse = JSON.parse(list)
    let user = listParse.filter(item => item.name == $findName.value)
    let $infoUser = document.querySelector('.infoUser')
    $infoUser.textContent = ''
    user.forEach(element =>{
        $infoUser.insertAdjacentHTML('afterbegin',`<span class="ct">Имя: ${element.name} <br> Пароль: ${element.password}</span><br><hr>`)
    })
   
})
let $buttonShow = document.querySelector('#buttonShow')

$buttonShow.addEventListener('click',function(){
    let $ussers = document.querySelector('.ussers')
    let list = localStorage.getItem('users')
    let listParse = JSON.parse(list)
    listParse.forEach(element => {
        $ussers.insertAdjacentHTML('afterbegin',`<span class="ct">Имя: ${element.name} <br> Пароль: ${element.password}</span> <br> <hr>`)
    });
})