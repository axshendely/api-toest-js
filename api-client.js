const get_task_api = function (data_to_post) {
    console.log(data_to_post)
    return Posting(make_data(data_to_post))
}

const make_data = function (data_info) {
    return {
        "description": JSON.stringify(data_info),
        "done": false,
    }
}
const Gettings = function () {
    return fetch('http://127.0.0.1:3000', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => res.json()).then(data => data)
}

const send_Getting = function () {
    return fetch('http://127.0.0.1:3000', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => res.json()).then(data => data.map(element => make_task_list(element.description)))
}

const remove_function = function (id_to_remove) {
    console.log(`http://127.0.0.1:3000/${id_to_remove}`)
    return fetch(`http://127.0.0.1:3000/${id_to_remove}`, {
        method: 'DELETE',
    })
}

const remove_all = function () {
    return Gettings().then(data => data.map(elements => remove_function(elements._id)))
}

const Posting = function (json_data) {
    return fetch('http://127.0.0.1:3000', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(json_data)
    })
}

const Update = function (id_to_update, text_to_update) {
    return fetch(`http://127.0.0.1:3000/${id_to_update}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(make_data(text_to_update))
    })
}

send_Getting();
get_task_api('Example To do Task')
