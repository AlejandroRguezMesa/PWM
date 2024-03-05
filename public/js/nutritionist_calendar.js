
let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');
let currentSelected; 
let rightbtnDOM = document.getElementById('plus');
let cancelbtnDOM = document.getElementById('cancel');
let closebtnDOM = document.getElementById('close');
let send_dialog_btnDOM = document.getElementById('send');
let close_dialog_btnDOM = document.getElementById('closedialog');
let save_dish_btnDOM = document.getElementById('save-dish');

const dishesElement = document.querySelector('.dishes'); 
let dialog;

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

rightbtnDOM.addEventListener('click', ()=>showgRight());
cancelbtnDOM.addEventListener('click', ()=>cancelF());
closebtnDOM.addEventListener('click', ()=>closeF());
send_dialog_btnDOM.addEventListener('click', ()=>send_dialogF());
close_dialog_btnDOM.addEventListener('click', ()=>close_dialogF());
save_dish_btnDOM.addEventListener('click', ()=>save_dishF());



document.getElementById("note").addEventListener("click", function() {
    var elementos = document.querySelectorAll('.dialog');

    for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'block';
    }
  });

const writeMonth = (month) => {
    dates.innerHTML = ''; 
    for (let i = startDay(); i > 0; i--) {
        dates.innerHTML += `<div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber - 1) - (i - 1)}
        </div>`;
    }

    for (let i = 1; i <= getTotalDays(month); i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar__date calendar__item';
        dayDiv.textContent = i;

        if (i === currentDay) {
            dayDiv.classList.add('calendar__today');
        }

        dayDiv.addEventListener('click', function() {
            if (currentSelected) {
                currentSelected.style.color = '';
                currentSelected.style.fontWeight = '';
            }
            this.style.color = 'green';
            this.style.fontWeight = '1000';
            currentSelected = this;
        });
        

        dates.appendChild(dayDiv);
    }
};

const closeF = () => {
    if(confirm("¿Seguro que quieres eliminar el plato?")){
        dishesElement.style.display = 'none';
    }
}
const send_dialogF = () => {
    dishesElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; 
    if(confirm("¿Estás seguro de que quieres enviarlo?")){
        close_dialogF();
    }
    else{
        dishesElement.style.backgroundColor = ''; 
    }
}
const save_dishF = () => {
    if(confirm("¿Quieres añadirlo a la base de datos?")){
        dishesElement.style.display = 'block';
        cancelF();
    }

}
const close_dialogF = () => {
    dishesElement.style.backgroundColor = '';
    const dialogElement = document.querySelector('.dialog'); 
    dialogElement.style.display = 'none';
}
const getTotalDays = month => {
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;
    } else {
        return isLeap() ? 29:28;
    }
}

const showgRight = () => {
    var elementos = document.querySelectorAll('.right-dish-form');
    for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'block';
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const cancelF = () => {
    const rightElement = document.querySelector('.right-dish-form');
        rightElement.style.display = 'none';
    
    if (currentSelected) {
        currentSelected.style.color = ''; 
        currentSelected.style.fontWeight = ''; 
    }

}
document.addEventListener('DOMContentLoaded', (event) => {
    cancelF(); 
});
writeMonth(monthNumber);

