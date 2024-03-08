let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');
let currentSelected; 
let send_dialog_btnDOM = document.getElementById('send');
let close_dialog_btnDOM = document.getElementById('closedialog');

let send_day_note_btnDOM = document.getElementById('send_day_note');
let close_day_note_btnDOM = document.getElementById('close_day_note');

const dishesElement = document.querySelector('.dishes'); 
let dialog

const dialoglabel = document.querySelector('.dialog');
const day_note_label = document.querySelector('.day_note');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();


send_dialog_btnDOM.addEventListener('click', ()=>send_dialogF());
close_dialog_btnDOM.addEventListener('click', ()=>close_dialogF());

send_day_note_btnDOM.addEventListener('click', ()=>send_day_noteF());
close_day_note_btnDOM.addEventListener('click', ()=>close_day_noteF());

document.getElementById("configuration_menu").onclick = function(event) {
    event.stopPropagation();
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = "block";
}

document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("dropdown");

    if (!dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});


document.getElementById("note").addEventListener("click", function() {
    dialoglabel.style.display = 'block';
    
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
        dayDiv.addEventListener('dblclick', function() {
            day_note_label.style.display = 'block';
        });
        

        dates.appendChild(dayDiv);
    }
};


const send_dialogF = () => {
    dishesElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; 
    if(confirm("¿Estás seguro de que quieres enviarlo?")){
        close_dialogF();
    }
    else{
        dishesElement.style.backgroundColor = ''; 
    }
}


const close_dialogF = () => {
    dishesElement.style.backgroundColor = '';
    const dialogElement = document.querySelector('.dialog'); 
    dialogElement.style.display = 'none';
}

const send_day_noteF = () => {
    if(confirm("¿Estás seguro de que quieres enviarlo?")){
        close_day_noteF();
    }
}

const close_day_noteF = () => {
    const note = document.querySelector('.day_note');
    note.style.display = 'none';
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

