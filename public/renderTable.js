const el = tag => document.createElement(tag)

let userlistBtn = document.querySelectorAll("#account_1")[0]
let userlistDom = document.querySelectorAll("#account_1")[1]
let userlistCell = document.querySelector("#userlistCell")
let userlistInit = `
<tr>
    <td>번호</td>
    <td>아이디</td>
    <td>이름</td>
    <td>군번</td>
    <td>주민번호</td>
    <td>휴대폰 번호</td>
    <td>계급</td>
    <td>병과</td>
</tr>
`

let users = [
    {
        "index": "1",
        "id": 'user1',
        "name": "홍길동",
        "military_number": "00-12345678",
        "resident_number": "900101-1111111",
        "phone_number": "010-1234-5678",
        "military_rank": "병장",
        "military_class": "수송"
    },
    {
        "index": "2",
        "id": 'user2',
        "name": "김태호",
        "military_number": "01-12345678",
        "resident_number": "950101-1111111",
        "phone_number": "010-2345-6789",
        "military_rank": "이등병",
        "military_class": "통신"
    }
]


const renderUserlist = () => {
    userlistCell.innerHTML = userlistInit
    users.map(function (user) {
        let trDom = el('tr')
        let index = el('td')
        let id = el('td')
        let name = el('td')
        let military_number = el('td')
        let resident_number = el('td')
        let phone_number = el('td')
        let military_rank = el('td')
        let military_class = el('td')


        index.append(user.index)
        id.append(user.id)
        name.append(user.name)
        military_number.append(user.military_number)
        resident_number.append(user.resident_number)
        phone_number.append(user.phone_number)
        military_rank.append(user.military_rank)
        military_class.append(user.military_class)


        trDom.append(index, id, name, military_number, resident_number, phone_number, military_rank, military_class)
        userlistCell.append(trDom)

        userlistCell.style.width = "100%"
        userlistCell.style.textAlign = "center"
    })
}


renderUserlist()

function userlistSearch() {
    let input = document.querySelector("#userlistSearch")
    let filter = input.value.toUpperCase();
    let table = document.querySelector("#userlistCell")
    let tr = table.getElementsByTagName("tr");


    for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
    }

    for (i = 1; i < tr.length; i++) {
        let index = tr[i].getElementsByTagName("td")[0]
        let id = tr[i].getElementsByTagName("td")[1]
        let name = tr[i].getElementsByTagName("td")[2]
        let military_number = tr[i].getElementsByTagName("td")[3]
        let resident_number = tr[i].getElementsByTagName("td")[4]
        let phone_number = tr[i].getElementsByTagName("td")[5]
        let military_rank = tr[i].getElementsByTagName("td")[6]
        let military_class = tr[i].getElementsByTagName("td")[7]

        let columns = [name, military_number]

        for (const ele of columns) {
            if (ele) {
                txtValue = ele.textContent || ele.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
            }
        }
    }
}