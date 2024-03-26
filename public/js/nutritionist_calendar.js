
let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let selectedYear = currentYear;
let selectedDay = currentDay;
let selectedMonth = monthNumber;
let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');
let currentSelected;
let rightbtnDOM = document.getElementById('plus');
let cancelbtnDOM = document.getElementById('cancel');
let closebtnDOM = document.getElementById('close');
let send_dialog_btnDOM = document.getElementById('send');
let close_dialog_btnDOM = document.getElementById('closedialog');
const dishesElement = document.querySelector('.dishes');
const dishesContainer = document.querySelector(".adding_dish");

let addDishSubmit = document.getElementById('save-dish');

const addDishName = document.querySelector(".dish-name "),
    addDishProtein = document.querySelector(".dish-protein "),
    addDishTotalFat = document.querySelector(".dish-totalfat "),
    addDishSaturedFat = document.querySelector(".dish-saturedfat "),
    addDishCarbohydrates = document.querySelector(".dish-carbohydrates "),
    addDishSugars = document.querySelector(".dish-sugars "),
    addDishSodium = document.querySelector(".dish-sodium "),
    addDishFibre = document.querySelector(".dish-fibre ");

let dialog;

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

rightbtnDOM.addEventListener('click', ()=>showgRight());
cancelbtnDOM.addEventListener('click', ()=>cancelF());
closebtnDOM.addEventListener('click', ()=>closeF());
send_dialog_btnDOM.addEventListener('click', ()=>send_dialogF());
close_dialog_btnDOM.addEventListener('click', ()=>close_dialogF());
addDishSubmit.addEventListener('click', ()=>Submit());


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

            selectedDay = parseInt(this.textContent); // Guarda el día seleccionado
            selectedMonth = month; // Guarda el mes seleccionado


            // Mostrar el día y mes seleccionados en la consola

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
    addDishName.value = '';
    addDishProtein.value = '';
    addDishTotalFat.value = '';
    addDishSaturedFat.value = '';
    addDishCarbohydrates.value = '';
    addDishSodium.value = '';
    addDishSugars.value = '';
    addDishFibre.value = '';

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


addDishName.addEventListener("input", (e) => {
    addDishName.value = addDishName.value.slice(0, 80);
});
addDishProtein.addEventListener("input", (e) => {
    addDishProtein.value = addDishProtein.value.replace(/[^0-9:]/g, "");
    if (addDishProtein.value.length > 0) {
        addDishProtein.value += "g";
    }
        if (addDishProtein.value.length > 3) {
            addDishProtein.value = addDishProtein.value.slice(0, 2);
            addDishProtein.value += "g";
        }

});
addDishTotalFat.addEventListener("input", (e) => {
    addDishTotalFat.value = addDishTotalFat.value.replace(/[^0-9:]/g, "");
    if (addDishTotalFat.value.length > 0) {
        addDishTotalFat.value += "g";
    }
    if (addDishTotalFat.value.length > 3) {
        addDishTotalFat.value = addDishTotalFat.value.slice(0, 2);
        addDishTotalFat.value += "g";
    }
});

addDishSaturedFat.addEventListener("input", (e) => {
    addDishSaturedFat.value = addDishSaturedFat.value.replace(/[^0-9:]/g, "");
    if (addDishSaturedFat.value.length > 0) {
        addDishSaturedFat.value += "g";
    }
    if (addDishSaturedFat.value.length > 3) {
        addDishSaturedFat.value = addDishSaturedFat.value.slice(0, 2);
        addDishSaturedFat.value += "g";
    }
});
addDishCarbohydrates.addEventListener("input", (e) => {
    addDishCarbohydrates.value = addDishCarbohydrates.value.replace(/[^0-9:]/g, "");
    if (addDishCarbohydrates.value.length > 0) {
        addDishCarbohydrates.value += "g";
    }
    if (addDishCarbohydrates.value.length > 3) {
        addDishCarbohydrates.value = addDishCarbohydrates.value.slice(0, 2);
        addDishCarbohydrates.value += "g";
    }
});
addDishSugars.addEventListener("input", (e) => {
    addDishSugars.value = addDishSugars.value.replace(/[^0-9:]/g, "");
    if (addDishSugars.value.length > 0) {
        addDishSugars.value += "g";
    }
    if (addDishSugars.value.length > 3) {
        addDishSugars.value = addDishSugars.value.slice(0, 2);
        addDishSugars.value += "g";
    }
});
addDishSodium.addEventListener("input", (e) => {
    addDishSodium.value = addDishSodium.value.replace(/[^0-9:]/g, "");
    if (addDishSodium.value.length > 0) {
        addDishSodium.value += "g";
    }
    if (addDishSodium.value.length > 3) {
        addDishSodium.value = addDishSodium.value.slice(0, 2);
        addDishSodium.value += "g";
    }
});
addDishFibre.addEventListener("input", (e) => {
    addDishFibre.value = addDishFibre.value.replace(/[^0-9:]/g, "");
    if (addDishFibre.value.length > 0) {
        addDishFibre.value += "g";
    }
    if (addDishFibre.value.length > 3) {
        addDishFibre.value = addDishFibre.value.slice(0, 2);
        addDishFibre.value += "g";
    }
});
 Submit = () => {
    const DishName = addDishName.value;
    const DishProtein = addDishProtein.value;
    const DishTotalFat = addDishTotalFat.value;
    const DishSaturedFat = addDishSaturedFat.value;
    const DishCarbohydrates = addDishCarbohydrates.value;
    const DishSugars = addDishSugars.value;
    const DishSodium = addDishSodium.value;
    const DishFibre = addDishFibre.value;
    if (DishName === "" || DishProtein === "" || DishTotalFat === "" ||
        DishSaturedFat === "" || DishCarbohydrates === "" || DishSugars === "" || DishSodium === "" || DishFibre === "") {
        alert("Debes rellenar todos los elementos");
        return;
    }
     const protein = parseFloat(DishProtein.slice(0, -1));
     const totalFat = parseFloat(DishTotalFat.slice(0, -1));
     const saturedFat = parseFloat(DishSaturedFat.slice(0, -1));
     const carbohydrates = parseFloat(DishCarbohydrates.slice(0, -1));
     const sugars = parseFloat(DishSugars.slice(0, -1));
     const sodium = parseFloat(DishSodium.slice(0, -1));
     const fibre = parseFloat(DishFibre.slice(0, -1));
     const nutrient_grams = protein + totalFat + saturedFat + carbohydrates + sugars + sodium + fibre ;
     if (nutrient_grams > 100){
         alert("La suma de los nutrientes debe ser menor o igual a 100 gramos");
         return;
     }
     const dishData = {
         Year: selectedYear,
         Month: selectedMonth,
         Day: selectedDay,
         DishName: addDishName.value,
         DishProtein: addDishProtein.value,
         DishTotalFat: addDishTotalFat.value,
         DishSaturatedFat: addDishSaturedFat.value,
         DishCarbohydrates: addDishCarbohydrates.value,
         DishSugars: addDishSugars.value,
         DishSodium: addDishSodium.value,
         DishFibre: addDishFibre.value
     };
     if(confirm('¿Quieres añadir "'  + addDishName.value + '" a la base de datos?')){
         dishesElement.style.display = 'block';
         const dishDataJson = JSON.stringify(dishData);
         let dishes = JSON.parse(localStorage.getItem('dishes')) || [];
         dishes.push(dishData);
         localStorage.setItem('dishes', JSON.stringify(dishes));

         console.log('Dish data saved to localStorage', dishDataJson);
         alert('El plato ' + DishName + '" ha sido asignado al día ' + selectedDay + ' de ' +
             monthNames[selectedMonth] + '.');
         cancelF();

     }

};


writeMonth(monthNumber);

