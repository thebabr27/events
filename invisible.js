
    
    document.body.innerHTML = `<div class="modal fade" id="saveEventModal" tabindex="-1" aria-labelledby="saveEventModalLabel" aria-hidden="true">
    <div class="modal-dialog rounded">
      <div class="modal-content bg-sky">
        <div class="modal-header">
          <h5 class="modal-title" id="saveEventModalLabel">Crea evento</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          
        </div>
        <div class="modal-body bg-sky container">
          <div class="row">
            <div class="d-none form-group col-12 mb-4">
              <label for="" class="form-label">id</label>
              <input id="id" type="text" class="form-control">
            </div>
            <div class="form-group col-12 mb-4">
              <label for="" class="form-label">Titolo</label>
              <input id="titolo" type="text" class="form-control" placeholder="Dare un titolo all'evento">
            </div>
          <div class="form-group col-12 mb-4">
            <label for="" class="form-label">Descrizione</label>
            <textarea name="" id="descrizione" cols="30" rows="5" class="form-control" placeholder="Scrivere una breve descrizione dell'evento"></textarea>
          </div>
          <div class="form-group col-12 mb-4">
            <div class="form-check">
              <input id="periodoCheck" class="form-check-input" type="radio" name="flexRadioDefault" checked>
              <label class="form-check-label" for="flexRadioDefault1">
                Periodo
              </label>
            </div>
            <div class="form-check">
              <input id="dataCheck" class="form-check-input" type="radio" name="flexRadioDefault">
              <label class="form-check-label" for="flexRadioDefault2">
                Data esatta
              </label>
            </div>
          </div>
          <div id="dal" class="d-none form-group col-6 mb-4">
            <label for="" class="form-label">Dal</label>
            <input class="form-control" type="date">
          </div>
          <div id="al"  class="d-none form-group col-6 mb-4">
            <label for="" class="form-label">Al</label>
            <input class="form-control" type="date">
          </div>
          <div id="mese" class="form-group col-12 mb-4">
            <label for="" class="form-label">Mese</label>
            <input class="form-control" type="month">
          </div>
          <div class="form-group col-5">
            <label for="" class="form-label">Costo (da 1 a 5)</label>
            <input id="costo" class="form-control" type="number" min=1 max=5>
          </div>
          <div class="form-group col-7">
            <label for="" class="form-label">Impegno fisico (da 1 a 5)</label>
            <input id="impegno" class="form-control" type="number" min=1 max=5>
          </div>
    
        </div>
        </div>
        <div class="p-3 d-flex justify-content-between">
          <div></div>
          <button id="delete" type="button" class="me-2 btn btn-danger">Elimina</button>
          <div>
          <button id="cancel" type="button" class="me-2 btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
          <button id="saveEvent" type="button" class="btn btn-primary disabled">Salva evento
            <div id="saveSpin" class="d-none spinner-border spinner-border-sm" role="status">
                <span class="sr-only"></span>
              </div></button>
          
            </div>
          </div>
        </div>
    </div>
    <div class="d-none modal-dialog rounded mt-5">
      <div class="modal-content bg-sky" style="margin-top: 50%;">
        <div class="modal-body bg-sky container">
          <div class="p-5 text-center">
            
            <h5 class="modal-title">Desideri eliminare l'evento</h5>
            <h5 class="modal-title"><span id="eventToDelete"></span>?</h5>
          </div>
          <button id="cancelDelete" type="button" class="me-2 btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
          <button id="deleteEvent" type="button" class="btn btn-danger">Elimina evento
          
        </div>
      </div>
    </div>
    <div class="d-none  modal-dialog rounded mt-5">
      <div class="modal-content bg-sky" style="margin-top: 50%;">
        <div class="modal-header">
    
        <h5 class="modal-title">Aggiungi utente</h5>
        </div>
        <div class="modal-body bg-sky container">
            <div class="row">
              <div class="form-group col-12 mb-4">
                <label for="" class="form-label">name</label>
                <input id="newUserName" type="text" class="form-control">
              </div>
              <div class="form-group col-12 mb-4">
                <label for="" class="form-label">phoneNumber</label>
                <input id="newUserPhoneNumber" type="text" class="form-control">
              </div>
            </div>
            
            <div id="users"></div>
            <div class="p-2 d-flex justify-content-end">
              <button id="cancelAddNewUser" type="button" class="me-2 btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
              <button id="addNewUser" type="button" class="btn btn-primary">Aggiungi</button>
          </div>
        </div>
       </div>
    </div>
    </div>
    <div id="loginGroup" class="container" style="max-width: 400px;">
    <div class="card bg-transparent border-0">
      <div class="card-body">
        <div class="form-group d-none">
            <label for="">Email:</label>
            <input id="inputEmail" type="email" value="thebabr27@gmail.com" class="form-control disabled">
        </div>
        <div class="form-group  ">
            <label for="" ><b>Numero di cellulare dell'utente:</b></label>
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">+39</span>
              <input id="inputCellphone" type="number" class="form-control">
            </div>
        </div>
        <div class="form-group mb-3">
            <label for=""><b>Password:</b></label>
            <input id="inputPassword" type="password" class="form-control">
            <div class="invalid-feedback">
              Accesso non consentito, utente non presente.
            </div>
        </div>
        <div class="d-grid gap-2">
        <button id="loginButton" class="btn btn-primary">
            Login
              <div id="loginSpin" class="d-none spinner-border spinner-border-sm" role="status">
                  <span class="sr-only"></span>
                </div>
        </button>
        </div>
      </div>
    </div>
    
    </div>
    <div id="logoutGroup"><a></a></div>
    <div id="appGroup" class="d-none">
    
    <nav class="navbar navbar-expand-md bg-light text-dark fixed-top">
      <div class="container-fluid">
        <div></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span><img src="./src/images/icons/account_circle_black.svg"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
    
            <li class="nav-item dropdown bg-light">
              <a class="nav-link text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div id="userName"></div>
              </a>
              <ul id="logoutGroup" class="dropdown-menu bg-light">
                <li><a class="dropdown-item text-dark" href="#">Esci</a></li>
                <li onclick="action(null, 'addUser')"><a class="dropdown-item text-dark" href="#">Aggiungi utente</a></li>
              </ul>
            </li>
          </ul>
          <div>
          </div>
        </div>
        <span class="d-none d-md-block"><img src="./src/images/icons/account_circle_black.svg"></span>
      </div>
      
    </nav>
    
    <div class="container">
      <div class="row">
        <div class="col-2 d-none d-lg-flex"></div>
        <div class="col-12 col-lg-8 px-0">
          <div class="card bg-transparent border-0 mt-5">
            <div class="card-body ">
              <div class="rounded semi-transp">
                <h1 class="w-100 text-center text-light bg-dark py-2 rounded">
                  EVENTI 2023
                </h1>
              </div>
            </div>
          </div>
              <div id="events" class="overflow-y">
                
    
                  
              </div>
              <div class="w-100 d-flex justify-content-center">
                <button onclick="action(null,'create')" id="modalButton" data-bs-toggle="modal" data-bs-target="#saveEventModal" style="min-width:69px;" class="mt-3 btn btn-light bg-sky rounded rounded-circle border border-dark">
                  <h1>+</h1>
                </button>
              </div>
        </div>
        <div class="col-2 d-none d-lg-flex"></div>
      </div>
    </div>
    </div>
    `
     
    // Your web app's Firebase configuration
     const firebaseConfig = {
        apiKey: "AIzaSyAyPpwYB1X-e5VnUkUgJ2orPcDr9ybDHEU",
        authDomain: "draggable-9f92b.firebaseapp.com",
        databaseURL: "https://draggable-9f92b.firebaseio.com",
        projectId: "draggable-9f92b",
        storageBucket: "draggable-9f92b.appspot.com",
        messagingSenderId: "1010593277055",
        appId: "1:1010593277055:web:1b729dc7368b8f6f"
      };
    
      // Initialize Firebase
    
      firebase.initializeApp(firebaseConfig);
    
      // constants declaration
      const loginButton = $('#loginGroup button')
      const logoutButton = $("#logoutGroup li a")[0]
      const inputCellphone = $('#inputCellphone')[0]
      const inputPassword = $('#inputPassword')[0]
      const periodoCheck = $('#periodoCheck')[0]
      const dataCheck = $('#dataCheck')[0]
      const id = $('#id')[0]
      const dal = $('#dal input')[0]
      const al = $('#al input')[0]
      const mese = $('#mese input')[0]
      const saveEventModal = $('#saveEventModal')[0]
      const costo = $('#costo')[0]
      const impegno = $('#impegno')[0]
      const titolo = $('#titolo')[0]
      const descrizione = $('#descrizione')[0]
      const saveEventButton = $('#saveEvent')[0]
      const cancelButton = $('#cancel')[0]
      const modalButton = $('#modalButton')[0]
      const deleteModalButton = $('#delete')[0]
      const cancelModalButton = $('#cancelDelete')[0]
      const deleteEventButton = $('#deleteEvent')[0]
      const cancelAddNewUserButton = $('#cancelAddNewUser')[0]
      const addNewUserButton = $('#addNewUser')[0]
      const newUserNameInput = $('#newUserName')[0];
      const newUserPhoneNumberInput = $('#newUserPhoneNumber')[0];
      const users = $('#users')[0];
      const userName = $('#userName')[0];
    cancelAddNewUserButton.addEventListener('click', e => {  
    setTimeout(t=>{
      $('.modal-dialog')[0].classList.remove("d-none")
      $('.modal-dialog')[1].classList.add("d-none")
      $('.modal-dialog')[2].classList.add("d-none")
    },1000)
    })
    
    addNewUserButton.addEventListener('click', e => {
    aggiungiUtente()
    })
    
    deleteEventButton.addEventListener('click', e => {
    eliminaEvento()
    })
    
    deleteModalButton.addEventListener('click', e => {  
    $('.modal-dialog')[0].classList.add("d-none")
    $('.modal-dialog')[1].classList.remove("d-none")
    $('.modal-dialog')[2].classList.add("d-none")
    })
    
    cancelModalButton.addEventListener('click', e => {
    setTimeout(t=>{
      $('.modal-dialog')[0].classList.remove("d-none")
      $('.modal-dialog')[1].classList.add("d-none")
      $('.modal-dialog')[2].classList.add("d-none")
    },1000)
    })
    
    saveEventButton.addEventListener('click', e => {
    salvaEvento()
    })
    
    saveEventModal.addEventListener('keydown', e => {
    if (checkForm()) {
      saveEventButton.classList.remove('disabled')
    }
    })
    
    saveEventModal.addEventListener('change', e => {
    if (checkForm()) {
      saveEventButton.classList.remove('disabled')
    }
    })
    
    cancelButton.addEventListener('click', e => {
    reset([id,titolo,descrizione,dal,al,mese,costo,impegno])
    })
    
    function aggiungiUtente() {
    numbers[newUserPhoneNumberInput.value] = newUserNameInput.value;
    firebase.database().ref("events/phoneNumbers").set(numbers)
    newUserPhoneNumberInput.value="";
    newUserNameInput.value="";
    cancelAddNewUserButton.click()
    }
      
      
    function ordinaPerData(arr) {  
    let newArr=[], defArr=[];
                for (let item of arr) {
                  let theData = "yyyy/mm/gg";
                  if (item.when.split(" - ").length > 1) {
      
      theData = `${item.when.split(" - ")[0].split("-")[0]}/${item.when.split(" - ")[0].split("-")[1]}/${item.when.split(" - ")[0].split("-")[2]}`
      } else {
      theData = `${item.when.split("-")[0]}/${item.when.split("-")[1]}/01`
      }
                  newArr.push(
                    {id:item.id, data:theData}
                  )
                }
                newArr.sort((a, b)=>
                  new Date(a.data).getTime() - new Date(b.data).getTime()
                )
                for (let item of newArr) {
                  defArr.push(arr.filter(e=>e.id==item.id.toString())[0])
                }
                return defArr
    }
    
    function eliminaEvento() {
        var ref = firebase.database().ref("events/events")
              .once("value")
              .then(function (snapshot) {
                try {
                  let eventi = []
                  for (let item of snapshot.val()) {
                    eventi.push(item)
                  }
                  let when = ''; if (mese.value) { when = mese.value }
                  else {when = dal.value + ' - '+ al.value }
                if (id.value && eventi.map(e=>e.id).indexOf(Number(id.value))>-1) {    
                  eventi.splice(eventi.map(e=>e.id).indexOf(Number(id.value)),1)
                }
                events = eventi
                firebase.database().ref("events/events").set(events)
                cancelButton.click()
                setTimeout(t=>{
                  $('.modal-dialog')[0].classList.remove("d-none")
                  $('.modal-dialog')[1].classList.add("d-none")
                  $('.modal-dialog')[2].classList.add("d-none")
                },1000)
                resetHtml()
                updateHtml()
    
    
              } catch (err) {
                console.log(err);
              }
        })
    }
    
    
    function checkForm() {
      return (titolo.value
      && descrizione.value
      && (mese.value || (dal.value && al.value))
      && costo.value
      && impegno.value)
    }
    
    periodoCheck.addEventListener('change', e => {
      show(['#mese'])
      hide(['#dal','#al'])
      reset([mese,dal,al])
    })
    
    dataCheck.addEventListener('change', e => {
      hide(['#mese'])
      show(['#dal','#al'])
      reset([mese,dal,al])
    })
    
    loginButton.on('click', e => {
      login()
    })
    
    logoutButton.addEventListener("click", e => {
      logout()
    });
    
    inputCellphone.addEventListener('keydown', key=>{
      if (key.code=='Enter') {
        login()
      }
    })
    inputPassword.addEventListener('keydown', key=>{
      if (key.code=='Enter') {
        login()
      }
    })
    function salvaEvento() {
    var ref = firebase.database().ref("events/events")
          .once("value")
          .then(function (snapshot) {
            try {
              let eventi = [],newId = 1;
              if (snapshot.val()) {
                for (let item of snapshot.val()) {
                  eventi.push(item)
                }
              newId = Number(eventi[eventi.length-1].id) + 1;
              }
              let when = ''; 
              console.log(mese.value, dal.value, al.value)
              if (mese.value) { when = mese.value }
              else {when = dal.value + ' - '+ al.value }
              
              if (id.value && eventi.map(e=>e.id).indexOf(Number(id.value))>-1) {
                eventi[eventi.map(e=>e.id).indexOf(Number(id.value))]
                .description = descrizione.value;
                eventi[eventi.map(e=>e.id).indexOf(Number(id.value))]
                .phisical = impegno.value;
                eventi[eventi.map(e=>e.id).indexOf(Number(id.value))]
                .price = costo.value;
                eventi[eventi.map(e=>e.id).indexOf(Number(id.value))]
                .title = titolo.value;                
                eventi[eventi.map(e=>e.id).indexOf(Number(id.value))]
                .when = when;
                if (eventi[eventi.map(e=>e.id).indexOf(Number(id.value))]
                .interested) {
                  eventi[eventi.map(e=>e.id).indexOf(Number(id.value))]
                  .interested = selectedEvent.interested
                }
                if (eventi[eventi.map(e=>e.id).indexOf(Number(id.value))]
                .booked) {
                  eventi[eventi.map(e=>e.id).indexOf(Number(id.value))]
                  .booked = selectedEvent.booked
                }
              } else {
                eventi.push({
                  description: descrizione.value,
                  id: newId,
                  phisical: impegno.value,
                  price: costo.value,
                  title: titolo.value,
                  when: when,
                  organizer: numbers[phonee]
                }) 
              }
              events = eventi
              firebase.database().ref("events/events").set(events)
              cancelButton.click()
              resetHtml()
              updateHtml()
    
            } catch (err) {
              console.log(err);
            }
          })
    }
    
    function reset(arr) {
      for (let item of arr) {
        item.value = "";
      }
      saveEventButton.classList.add('disabled')
    }
    
    // logged user auth declaration
    const auth = firebase.auth();
    let eventsWrapper = $('#events');
    let phonee;
    let numbers = []
    let selectedEvent = null;
    let events = []
    
    let html = "",euros="",stars="",interested="",booked="";
    
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log("logged in");
    
        var ref = firebase.database().ref("events")
          .once("value")
          .then(function (snapshot) {
            try {
              numbers=snapshot.val().phoneNumbers
              //console.log(numbers)
              if(Object.keys(numbers).indexOf(phonee)>-1) {
                if (isUserAdmin()) { $('#logoutGroup li')[1].remove() }
                userName.innerHTML = `Ciao ${toTitleCase(numbers[phonee].split(" ")[0])}`
                show(["#appGroup"])
                hide(["#loginGroup"])
              } else {
                logout()
                $('.invalid-feedback')[0].classList.add("d-block")
                setTimeout(t=>{$('.invalid-feedback')[0].classList.remove("d-block")},3000)
              }
            } catch (err) {
              console.log(err);
            }
          })
        var ref = firebase.database().ref("events")
          .once("value")
          .then(function (snapshot) {
            try {
              events = snapshot.val().events
              resetHtml()
              updateHtml()
            } catch (err) {
              console.log(err);
            }
          })
    
    
      } else {
        console.log("not logged in");
      hide([$('#loginSpin')])
        show(["#loginGroup"])
        hide(["#appGroup"])
      }
    })
    
    function isUserAdmin() {
      return phonee!='3202209660'
    }
    
    function toTitleCase(str) {
      return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
    }
    
    function resetHtml() {
      eventsWrapper.html("a")
      eventsWrapper.html(" ")
    }
    
    function updateHtml() {
    html = "",euros="",stars="",interested="",booked="",when = "";
    
    events = ordinaPerData(events);
    
    for (let event of events) {
      when = "";
      euros="";
      if (event.price) {
        for (let euro=0;euro<5; euro++) {
          if (euro<event.price) {
            euros+=`<img src="./src/images/icons/euro_fill.svg" alt="">  `    
          }  else {
            euros+=`<img style="opacity: .4;" src="./src/images/icons/euro_fill.svg" alt="">  `   
          }                       
        }                     
      }
    
      stars="";      
      if (event.phisical) {
        for (let star=0;star<5; star++) {
          if (star<event.phisical) {
            stars+=`<img src="./src/images/icons/star_fill.svg" alt="">  `    
          }  else {
            stars+=`<img style="opacity: .6;" src="./src/images/icons/star_stroke.svg" alt="">  `   
          }                       
        }                    
      }
    
      interested="";
      if (event.interested) {
        for (let person of event.interested) {
          interested+=`<li>${person}</li>`                  
        }              
      }
    
      booked="";
      if (event.booked) {
        for (let person of event.booked) {
          booked+=`<li>${person}</li>`       
        }
      }
      //console.log(event)
      
      if (event.when.split(" - ").length > 1) {
        when = `dal ${event.when.split(" - ")[0].split("-")[2]} ${getMese(event.when.split(" - ")[0].split("-")[1])} 
        al ${event.when.split(" - ")[1].split("-")[2]} ${getMese(event.when.split(" - ")[1].split("-")[1])} ${event.when.split(" - ")[1].split("-")[0]}`
      }  else {
        when = `${getMese(event.when.split("-")[1])} ${event.when.split("-")[0]}`
      }
    
      let showEditEvents = "d-flex";
      if (isUserAdmin()) { showEditEvents = "d-none"}
    
      html+=`<div class="card bg-transparent border-0 mt-5">
                      <div class="card-body">
                        <div class="card-header shadow text-center text-light bg-dark semi-transp">
                          <div class="w-100 ${showEditEvents} justify-content-end">                            
                            <span><button style="margin-right: -17px;margin-top: -5px;" class="btn" onclick="action(${event.id}, 'edit')"><img src="./src/images/icons/edit_white.svg" alt=""></button></span>
                          </div>
                          <h2 class="mt-0">${event.title}</h2>                          
                          <div class="my-4">
                            <hr>
                            <div class="align-self-center"><h5><span> 
                              ${event.description}
                            </span> </h5> </div>  
                          </div>
                        </div>
                        <div class="card-body shadow bg-sky px-3 px-md-5">
                          <div class="mt-4 w-100 d-flex justify-content-between">
                            <div class="align-self-center"><h5>Organizzato da:</h5>      </div>            
                            <div><h5>${event.organizer}</h5></div>
                          </div>
                          <div class="mt-4 w-100 d-flex justify-content-between">
                            <div class="align-self-center"><h5>Quando:</h5>      </div>            
                            <div><h5>${when}</h5></div>
                          </div>
                          <div class="mt-4 w-100 d-flex justify-content-between">
                            <div class="align-self-center"><h5>Costo:</h5>      </div>            
                            <div class="d-flex">
                              ${euros}
                            </div>
                          </div>
                          <div class="mt-4 w-100 d-flex justify-content-between">
                            <div class="align-self-center"><h5 class="my-2">Impegno fisico:</h5>      </div>            
                            <div class="d-flex">
                              ${stars}
                            </div>
                          </div>
                        </div>
                        <div class="card-footer shadow bg-sky">
                          
                          <div class="my-2 w-100 d-flex justify-content-between">
                            <div class="d-flex w-100">
                                <button class="d-none btn btn-link" onclick="action(${event.id}, 'showGroup')">
                                  <img src="./src/images/icons/group.svg" alt="">
                                </button>
                              <button style="text-decoration:none" class="text-dark btn btn-link" onclick="action(${event.id}, 'book')">
                               <img src="./src/images/icons/person_add.svg" alt="">                               
                               <h5 style="text-style: none;">Mi Prenoto</h5>
                              </button>
                            </div>
                            <div class="d-flex w-100 justify-content-end">
                              <button style="text-decoration:none" class="text-dark btn btn-link" onclick="action(${event.id}, 'like')">
                                <img src="./src/images/icons/like.svg" alt="">                                
                              <h5>Mi Interessa</h5>
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div id="collapse${event.id}" class=" card-footer shadow bg-sky container">
                          <div class="row">                    
                            
                            <div class="col-6">
                              <h6>Prenotati:</h6>
                              <ul>${booked}
                              </ul>
                            </div>
                            <div class="col-6">
                              <h6>Interessati:</h6>
                              <ul>${interested}
                              </ul>
                            </div>
    
                          </div>
                        </div>
                      </div>
                    </div>`
    }
    
    eventsWrapper.html(html)
    }
    function getMese(num) {
        switch (num) {
          case "01": return 'Gennaio'; break;
          case "02": return 'Febbraio'; break;
          case "03": return 'Marzo'; break;
          case "04": return 'Aprile'; break;
          case "05": return 'Maggio'; break;
          case "06": return 'Giugno'; break;
          case "07": return 'Luglio'; break;
          case "08": return 'Agosto'; break;
          case "09": return 'Settembre'; break;
          case "10": return 'Ottobre'; break;
          case "11": return 'Novembre'; break;
          case "12": return 'Dicembre'; break;
          default: return ""
        }
      }
    
      function addToList(listType,  event,number) {
        switch (listType) {
          case 'like':
            if (!event.interested) { event.interested = [] }
            if (event.interested.length > 0
            && event.interested.indexOf(numbers[number]) > -1) {
              event.interested.splice(
                event.interested.indexOf(numbers[number])
              ,1)
            } else {
              event.interested.push(numbers[number])
            }
            break;
          case 'book':
          if (!event.booked) { event.booked = [] }
            if (event.booked.length > 0
            && event.booked.indexOf(numbers[number]) > -1) {
              event.booked.splice(
                event.booked.indexOf(numbers[number])
              ,1)
            } else {
              event.booked.push(numbers[number])
            }
            break;
          default:
        }
      var ref = firebase.database().ref("events/events")
            .once("value")
            .then(function (snapshot) {
              try {
                let eventi = []
                if (snapshot) {
                  for (let item of snapshot.val()) {
                    if(event.id==item.id) {
                      eventi.push(event)
                    } else {
                      eventi.push(item)
                    }
                  }                  
                }
              events = eventi
              firebase.database().ref("events/events").set(events)
              cancelButton.click()
              resetHtml()
              updateHtml()
    
            } catch (err) {
              console.log(err);
            }
        })
      }
    
      function action(id,action) {
        console.log(id, action)
        let nameToAdd = numbers[phonee]
        let event;
        if (id) {event = events.filter(e=>e.id==id)[0]}
        switch (action) {
          case "addUser":
            users.innerHTML = "";
            for (let person of Object.keys(numbers)) {
              users.innerHTML += 
              `<div class="mt-4 w-100 d-flex justify-content-between">
                  <div class="align-self-center"><h5>${person}:</h5>      </div>            
                  <div><h5>${numbers[person]}</h5></div>
                </div>`
            }
          modalButton.click()
            $('.modal-dialog')[0].classList.add("d-none")
            $('.modal-dialog')[1].classList.add("d-none")
            $('.modal-dialog')[2].classList.remove("d-none")
          break;
          case "like":  
            addToList('like',event, phonee)
            break;
          case "book":
            addToList('book',event, phonee)
    
            break;
          case "edit":
            editEvent(event);
            break;
          case "showGroup":
            break;
          case "create":
            hide([$('.form-group')[0]])
            break;
          default: console.log("unknown action: ",action)
        }
        updateHtml()
      }
    
      function editEvent(event) {
          //console.log("editing",event)
          show([$('.form-group')[0]])
          selectedEvent = event;
          id.value = undefined;
          titolo.value = undefined;
          descrizione.value = undefined;
          mese.value = undefined;
          dal.value = undefined;
          al.value = undefined;
          periodoCheck.click();
    
          id.value = event.id
          titolo.value = event.title
          descrizione.value = event.description
          switch (event.when.split(" - ").length) {
            case 2: 
              dataCheck.click(); 
              dal.value = event.when.split(" - ")[0]
              al.value = event.when.split(" - ")[1]
            break;
            default: 
              mese.value = event.when;
          }
          impegno.value = event.phisical
          costo.value = event.price
          
          modalButton.click()
          
      }
    
      function logout() {
        firebase.auth().signOut();
      }
    
      function login() {
        show([$('#loginSpin')])
        const email = 'thebabr27@gmail.com'
        const pass = inputPassword.value
        const promise = auth.signInWithEmailAndPassword(email, pass);
        phonee = inputCellphone.value;
        
        promise.catch(e => console.log("err"));
      }
    
      function hide(arr) {
        for (let item of arr) {
          $(item).addClass('d-none');
          if ($(item).hasClass("d-flex")) {
            $(item).addClass('d-flex-muted');
            $(item).removeClass('d-flex');
          }
        }
      }
    
      function show(arr) {
        for (let item of arr) {
          $(item).removeClass('d-none');
          if ($(item).hasClass("d-flex-muted")) {
            $(item).removeClass('d-flex-muted');
            $(item).addClass('d-flex');
          }
        }
      }
    
      function trigger(arr) {
        for (let item of arr) {
          item.click()
        }
      }
    
      function loader(id) {
        $(id).html(`<div class="w-100 d-flex justify-content-center">
                      <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                      </div>
                  </div>
                  `)
      }