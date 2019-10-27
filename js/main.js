const btn_1 = document.getElementById('btn1');
const btn_2 = document.getElementById('btn2');
const handleClickExpenses = (e) => {
    const name = document.getElementById('name_1').value;
    const amount = document.getElementById('amount').value;

    const result = `Wydałeś ${amount} pln na ${name}`;

    const text = document.createElement('p');
    text.innerHTML = result;
    document.getElementById('name-res').appendChild(text)
}

btn_1.addEventListener('click', handleClickExpenses);


const handleClickRevenues = () => {
    // console.log('work!')
    const name = document.getElementById('name_2').value;
    // console.log(name)
    const amount = document.getElementById('amount_2').value;
    // console.log(amount)



    const result = `Dostałeś ${amount} pln za ${name}`;
    const text = document.createElement('p');
    text.innerHTML = result;
    document.getElementById('name-res-2').appendChild(text)


}


btn_2.addEventListener('click', handleClickRevenues)