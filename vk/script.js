
const getUsers = async() => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    return response.json();
};

const setUserHTML = user =>`
    <ul class="people_list">
    <li class="people_element_list">
    <img src="/image/file56870.jpeg" alt="">
    <div class="name_mail">
        <span>${user.username}</span><br><br>
        <a href="">${user.email}</a>
    </div>
    <button class="del_friends">Удалить из друзей</button> 
    </li>
    </ul>
`

const list = document.querySelector(".people_list")
const setAllUsers = users => {
    users.forEach(user => {
        list.innerHTML += setUserHTML(user)
        
    });
};

const actions = async() => {
    const users = await getUsers();
    setAllUsers(users);

};
actions();