const lijste = 'Remove_Task'
const grab_cataloge = document.getElementById('Task_listCatalog')

const get_task = function () {
    document.getElementById('add_task_button').addEventListener("click", function () {
        if (document.getElementById('input_textbox').value !== "")
            return get_task_api(document.getElementById('input_textbox').value)
    })
}

const make_task_list = function (task_text) {
    const make_li = document.createElement('li')
    make_li.setAttribute('name', 'li_holders')
    const make_paraaf = document.createElement('h3')
    make_paraaf.append(task_text)
    make_li.append(make_paraaf)
    const lis = document.createElement("li")
    lis.setAttribute('name', 'Check_lis')
    const buttons = document.createElement("button")
    buttons.setAttribute('type', 'button')
    buttons.setAttribute('name', 'remove_button')
    buttons.setAttribute('value', lijste.toLowerCase())
    buttons.innerText = "Remove Task"
    make_li.appendChild(buttons)
    grab_cataloge.appendChild(make_li)
    return grab_cataloge
}
const delete_elements = function (elements) {
    return grab_cataloge.removeChild(elements.currentTarget)
}
const maak_luisteraars = function () {
    document.getElementsByName('li_holders').forEach(html_element =>
        html_element.addEventListener("click", function (change_value) {
            const button_pressed = change_value.target.value
            switch (button_pressed) {
                case 'remove_task':
                    return delete_elements(change_value)
            }
        })
    )
}
make_task_list('Example Task I have To Do')
get_task()
maak_luisteraars()
