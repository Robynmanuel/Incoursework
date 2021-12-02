let app = new Vue ({
    el: '#app',
    data: {
        Sitename: 'After School Lessons',
        showLesson: true,
        ascending: true,
        // list of json objects in an array, one json object for each lesson
        "Lessons": [
            {'id':1001, 'Subject': 'Maths',   'Location':'London', 'Cost': 100, 'Spaces':5, 'image':'photos/math.png'},
            {'id':1002, 'Subject': 'English', 'Location':'York', 'Cost': 200, 'Spaces':5, 'image':'photos/eng.png'},
            {'id':1003, 'Subject': 'Chemistry', 'Location':'Oxford', 'Cost': 110, 'Spaces':5, 'image':'photos/chem.png'},
            {'id':1004, 'Subject': 'Biology', 'Location':'Conventry', 'Cost': 80, 'Spaces':5, 'image':'photos/bio.png'},
            {'id':1005, 'Subject': 'Economics', 'Location':'Manchester', 'Cost': 70, 'Spaces':5, 'image':'photos/econ.png'},
            {'id':1006, 'Subject': 'Physics', 'Location':'Cambrigde', 'Cost': 90, 'Spaces':5, 'image':'photos/physics.png'},
            {'id':1007, 'Subject': 'Literature', 'Location':'Bristol', 'Cost': 65, 'Spaces':5, 'image':'photos/lit.gif'},
            {'id':1008, 'Subject': 'History', 'Location':'Liverpool', 'Cost': 120, 'Spaces':5, 'image':'photos/history.png'},
            {'id':1009, 'Subject': 'Geography ', 'Location':'Newcastle', 'Cost': 105, 'Spaces':5, 'image':'photos/geo.png'},
            {'id':1010, 'Subject': 'Art & Design', 'Location':'Nottingham', 'Cost': 77, 'Spaces':5, 'image':'photos/art.png'},
            {'id':1011,'Subject': 'Music', 'Location':'Birmingham', 'Cost': 50, 'Spaces':5, 'image':'photos/music.png'},
            {'id':1012,'Subject': 'Physical education ', 'Location':'Sheffield', 'Cost': 40, 'Spaces':5, 'image':'photos/physical.png'},
        ],
       
        picked: '',
        hall: '',
        cart: [],
        searchCart: '',
        input1: '',
        input2: '',
        input3: '',
        
    },

    methods: {
       addToCart(){
           this.cart.push(this.Lessons.id);
        },

         showCheckout() {
            this.showLesson = this.showLesson ? false : true;
        },
 
  

        sortedAsc() {
            // the comparison function that defines the order
            function compare(a, b) {
            if (a.Subject > b.Subject) {return 1}
            if (a.Subject < b.Subject) {return -1}
            return 0 // a must be equal to b
            }
            // sort the 'lessons' array and return it
            return this.Lessons.sort(compare);
            },
            

        sortedAsc1() {
            // the comparison function that defines the order
            function compare(a, b) {
            if (a.Location > b.Location) {return 1}
            if (a.Location < b.Location) {return -1}
            return 0
            }
            // sort the 'lessons' array and return it
            return this.Lessons.sort(compare);
        },

        sortedAsc2() {
            // the comparison function that defines the order
            function compare(a, b) {
            if (a.Cost > b.Cost) {return 1}
            if (a.Cost < b.Cost) {return -1}
            return 0
            }
            // sort the 'lessons' array and return it
            return this.Lessons.sort(compare);
        },

        sortedDsc() {
            // the comparison function that defines the order
            function compare(a, b) {
            if (a.Subject < b.Subject) {return 1}
            if (a.Subject > b.Subject) {return -1}
            return 0 // a must be equal to b
            }
            // sort the 'lessons' array and return it
            return this.Lessons.sort(compare);
            },
            

        sortedDsc1() {
            // the comparison function that defines the order
            function compare(a, b) {
            if (a.Location < b.Location) {return 1}
            if (a.Location > b.Location) {return -1}
            return 0
            }
            // sort the 'lessons' array and return it
            return this.Lessons.sort(compare);
        },

        sortedDsc2() {
            // the comparison function that defines the order
            function compare(a, b) {
            if (a.Cost < b.Cost) {return 1}
            if (a.Cost > b.Cost) {return -1}
            return 0
            }
            // sort the 'lessons' array and return it
            return this.Lessons.sort(compare);
        },

        // function to enable or disable the cart button
        checked(){
            if(this.cartItemCount > 0 ){
            return true;
            }else{

                  return false;
                  }
        },

        // Regular expressions for the input text in checkout form
        valid() {
            var fname = document.getElementById('fname').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
        
            var nameRGEX = /^[A-Za-z]+[\s][A-Za-z]+$/;
            var emailRGEX = /^[\w @\w\.com\s]+$/;
            var phoneRGEX = /^[0-9]{1,3}[\s][0-9]{3}[\s][0-9]{3}[\s][0-9]{4,6}$/;
        
            var nameRes = nameRGEX.test(fname);
            var emailRes = emailRGEX.test(email);
            var phoneRes = phoneRGEX.test(phone);
            
            if(nameRes == false) {
                alert('Please enter a valid name');
                return false;
            }
            if(emailRes == false) {
                alert('Please enter a valid email');
                return false;
            }
            if(phoneRes == false) {
                alert('Please enter a valid Phone number');
                return false;
            }else{
                alert('Your order has been confirmed');
            }
            return true;
          },
          
        
 
    },

    computed: {

        cartItemCount() {
            return this.cart.length || '';
         },
       // function to enable or disable the checkout button inside the cart page
         val(){
            if(this.input1 != '' && this.input2 != '' && this.input3 != ''){
            return true;
            }else{
                      return false;
                  }
                },
        // search function 
        Searchas() {
            // creating an instance of the array
            let seeL = this.Lessons
            
            // search property
            if (this.searchCart != '') {
              seeL = seeL.filter((Lessons) => {
                return Lessons.Subject.toUpperCase().includes(this.searchCart.toUpperCase())
                  })
                }
                // return the array if nothing is searched for
              return seeL
            },
     // sort function for the subject button
        sortedSubject(){
            if(this.picked != ''){
            return this.sortedAsc;
        } else if(this.hall != ''){
            return this.sortedDsc;
        }
        }, 
// sort function for the location button
        sortedLocation(){
            if(this.picked != ''){
            return this.sortedAsc1;
        } else if(this.hall != ''){
            return this.sortedDsc1;
        }
        }, 
// sort function for the price button
        sortedCost(){
            if(this.picked != ''){
            return this.sortedAsc2;
        } else if(this.hall != ''){
            return this.sortedDsc2;
        }
        }, 

    },

});

function srt() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
