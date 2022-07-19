const database = new DataBase('#database')
database.database.push(new Student('Hùng', 'Nam Định'))
database.database.push(new Student('Đức', 'Đak Lak'))
database.database.push(new Student('Chinh', 'Hải Dương'))
database.database.push(new Student('Khánh', 'Của Chi'))
database.database.push(new Student('Hà', 'Thường tín'))
database.database.push(new Student('Đức', 'Lâm Đồng'))
database.database.push(new Student('Phú', 'Sài Đồng'))

database.show()

document.querySelector('#create').onclick = () => {
    database.add()
}

let searchNameInput = document.querySelector('#searchName')
let searchAddressInput = document.querySelector('#searchAddress')

document.querySelectorAll('#search > input').forEach(input => {
    input.oninput = () => {
        database.search(searchNameInput.value, searchAddressInput.value)
    }
})