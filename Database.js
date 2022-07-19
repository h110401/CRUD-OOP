class DataBase {
    constructor(divId) {
        this.divId = divId
        this.database = []
        this.temp = []
    }

    add() {
        let nameInput = document.querySelector('#nameInput').value
        let addressInput = document.querySelector('#addressInput').value
        if (nameInput.trim() === '' || addressInput.trim() === '') {
            alert('Khong duoc de trong')
        } else {
            this.database.push(new Student(nameInput, addressInput))
        }
        this.show()
    }

    delete(index) {
        this.database.splice(index, 1)
        this.show()
    }

    edit(index) {
        this.database[index] = new Student(prompt('name', this.database[index].name), prompt('address', this.database[index].address))
        this.show()
    }

    show() {
        this.listToTable(this.database)
    }

    search(name, address) {
        let list = []
        this.database.forEach(element => {
            if (element.name.toLowerCase().slice(0, name.length) === name.toLowerCase() && element.address.toLowerCase().slice(0, address.length) === address.toLowerCase()) {
                list.push(element)
            }
        })
        this.listToTable(list)
    }

    listToTable(list) {
        let dataDiv = document.querySelector(this.divId)
        dataDiv.replaceChildren()

        let dataTable = document.createElement('table')
        dataDiv.append(dataTable)
        list.forEach((student, index) => {
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.innerHTML = index + 1 + ''
            tr.append(td)
            for (const studentKey in student) {
                let td = document.createElement('td')
                td.append(student[studentKey])
                tr.append(td)
            }

            let editButton = document.createElement('button')
            editButton.innerHTML = 'Edit'
            editButton.onclick = () => {
                this.edit(index)
            }
            let tdEdit = document.createElement('td')
            tdEdit.append(editButton)
            tr.append(tdEdit)

            let deleteButton = document.createElement('button')
            deleteButton.innerHTML = 'Delete'
            deleteButton.onclick = () => {
                this.delete(index)
            }
            let tdDelete = document.createElement('td')
            tdDelete.append(deleteButton)
            tr.append(tdDelete)
            dataTable.append(tr)
        })
    }

}
