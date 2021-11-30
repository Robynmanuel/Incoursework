let app = new Vue ({
    el: '#app',
    data: {
        Sitename: 'After School Lessons',
        showLesson: true,
        "Lessons": [
            {'id':1001, 'Subject': 'Maths',   'Location':'London', 'Cost': '$100', 'Spaces':5, 'image':'photos/math.png'},
            {'id':1002, 'Subject': 'English', 'Location':'York', 'Cost': '$200', 'Spaces':5, 'image':'photos/eng.png'},
            {'id':1003, 'Subject': 'Chemistry', 'Location':'Oxford', 'Cost': '$110', 'Spaces':5, 'image':'photos/chem.png'},
            {'id':1004, 'Subject': 'Biology', 'Location':'Conventry', 'Cost': '$80', 'Spaces':5, 'image':'photos/bio.png'},
            {'id':1005, 'Subject': 'Economics', 'Location':'Manchester', 'Cost': '$70', 'Spaces':5, 'image':'photos/econ.png'},
            {'id':1006, 'Subject': 'Physics', 'Location':'Cambrigde', 'Cost': '$90', 'Spaces':5, 'image':'photos/physics.png'},
            {'id':1007, 'Subject': 'Literature', 'Location':'Bristol', 'Cost': '$65', 'Spaces':5, 'image':'photos/lit.gif'},
            {'id':1008, 'Subject': 'History', 'Location':'Liverpool', 'Cost': '$120', 'Spaces':5, 'image':'photos/history.png'},
            {'id':1009, 'Subject': 'Geography ', 'Location':'Newcastle', 'Cost': '$105', 'Spaces':5, 'image':'photos/geo.png'},
            {'id':1010, 'Subject': 'Art & Design', 'Location':'Nottingham', 'Cost': '$77', 'Spaces':5, 'image':'photos/art.png'},
            {'id':1011,'Subject': 'Music', 'Location':'Birmingham', 'Cost': '$50', 'Spaces':5, 'image':'photos/music.png'},
            {'id':1012,'Subject': 'Physical education ', 'Location':'Sheffield', 'Cost': '$40', 'Spaces':5, 'image':'photos/physical.png'},
        ],
       
        picked:[],
        cart: [],
        searchCart: '',
        
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
            if (a.Subject > b.Subject) return 1;
            if (a.Subject < b.Subject) return -1;
            }
            // sort the 'products' array and return it
            return this.Lessons.sort(compare);
            },
            

        sortedAsc1() {
            // the comparison function that defines the order
            function compare(a, b) {
            if (a.Location > b.Location) return 1;
            if (a.Location < b.Location) return -1;
            }
            // sort the 'products' array and return it
            return this.Lessons.sort(compare);
        },

        sortedAsc2() {
            // the comparison function that defines the order
            function compare(a, b) {
            if (a.Cost > b.Cost) return 1;
            if (a.Cost < b.Cost) return -1;
            }
            // sort the 'products' array and return it
            return this.Lessons.sort(compare);
        },

        checked(){
            if(this.cartItemCount > 0 ){
            return true;
            }else{

                  return false;
                  }
        },
 
    },

    computed: {

        cartItemCount() {
            return this.cart.length || '';
         },

        picker() {
            return this.picked.length || '';
        },

        Searchas() {
            let seeL = this.Lessons
            
            if (this.searchCart != '') {
              seeL = seeL.filter((Lessons) => {
                return Lessons.Subject.toUpperCase().includes(this.searchCart.toUpperCase())
                  })
                }
              return seeL
            },

        sortedSubject(){
            if(this.picker > 0){
            return this.sortedAsc;
        }
        }, 

        sortedLocation(){
            if(this.picker >  0){
            return this.sortedAsc1;
        }
        }, 

        sortedCost(){
            if(this.picker > 0){
            return this.sortedAsc2;
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