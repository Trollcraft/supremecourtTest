// TO-DO
//Add Court Cases
//Add Calculation
//Fix Wikipedia Button
//Add Percentage Calculation
//Add Result Screeen
//Design Page
//End Handling



//list of all justices
let justices = {
    "John Jay": {"points": 0, "cases": 0},
    "John Rutledge": {"points": 0, "cases": 0},
    "William Cushing": {"points": 0, "cases": 0},
    "James Wilson": {"points": 0, "cases": 0},
    "John Blair": {"points": 0, "cases": 0},
    "James Iredell": {"points": 0, "cases": 0},
    "Thomas Johnson": {"points": 0, "cases": 0},
    "Wiliam Paterson": {"points": 0, "cases": 0},
    "Samuel Chase": {"points": 0, "cases": 0},
    "Oliver Ellsworth": {"points": 0, "cases": 0},
    "Bushrod Washington": {"points": 0, "cases": 0},
    "Alfred Moore": {"points": 0, "cases": 0},
    "John Marshall": {"points": 0, "cases": 0},
    "William Johnson": {"points": 0, "cases": 0},
    "Henry Brockholst Livingston": {"points": 0, "cases": 0},
    "Thomas Todd": {"points": 0, "cases": 0},
    "Gabriel Duvali": {"points": 0, "cases": 0},
    "Joseph Story": {"points": 0, "cases": 0},
    "Smith Thompson": {"points": 0, "cases": 0},
    "Robert Trimble": {"points": 0, "cases": 0},
    "John McLean": {"points": 0, "cases": 0},
    "Henry Baldwin": {"points": 0, "cases": 0},
    "James Moore Wayne": {"points": 0, "cases": 0},
    "Roger B. Taney": {"points": 0, "cases": 0},
    "Philip P. Barbour": {"points": 0, "cases": 0},
    "John Catron": {"points": 0, "cases": 0},
    "John McKinley": {"points": 0, "cases": 0},
    "Peter Vivian Daniel": {"points": 0, "cases": 0},
    "Samuel Nelson": {"points": 0, "cases": 0},
    "Levi Woodbury": {"points": 0, "cases": 0},
    "Robert Cooper Grier": {"points": 0, "cases": 0},
    "Benjamin Robbins Curtis": {"points": 0, "cases": 0},
    "John Archibald Campbell": {"points": 0, "cases": 0},
    "Nathan Clifford": {"points": 0, "cases": 0},
    "Noah Haynes Swayne": {"points": 0, "cases": 0},
    "Samuel Freeman Miller": {"points": 0, "cases": 0},
    "David Davis": {"points": 0, "cases": 0},
    "Steven Johnson Field": {"points": 0, "cases": 0},
    "Salmon P. Chase": {"points": 0, "cases": 0},
    "William Strong": {"points": 0, "cases": 0},
    "Joseph P. Bradley": {"points": 0, "cases": 0},
    "Ward Hunt": {"points": 0, "cases": 0},
    "Morrison Waite": {"points": 0, "cases": 0},
    "John Marshall Harlan": {"points": 0, "cases": 0},
    "William Burnham Woods": {"points": 0, "cases": 0},
    "Stanley Matthews": {"points": 0, "cases": 0},
    "Horace Gray": {"points": 0, "cases": 0},
    "Samuel Blatchford": {"points": 0, "cases": 0},
    "Lucius Quintus Cincinnatus Lamar": {"points": 0, "cases": 0},
    "Melville Fuller": {"points": 0, "cases": 0},
    "David J. Brewer": {"points": 0, "cases": 0},
    "Henry Billings Brown": {"points": 0, "cases": 0},
    "George Shiras": {"points": 0, "cases": 0},
    "Edward Douglass White": {"points": 0, "cases": 0},
    "Rufus W. Packham": {"points": 0, "cases": 0},
    "Joseph McKenna": {"points": 0, "cases": 0},
    "Oliver Wendell Holmes Jr.": {"points": 0, "cases": 0},
    "William R. Day": {"points": 0, "cases": 0},
    "William Henry Moody": {"points": 0, "cases": 0},
    "Horace Harmon Lurton": {"points": 0, "cases": 0},
    "Charles Evans Hughes": {"points": 0, "cases": 0},
    "Edward Douglass White": {"points": 0, "cases": 0},
    "Willis Van Devanter": {"points": 0, "cases": 0},
    "Joseph Rucker Lamar": {"points": 0, "cases": 0},
    "Mahlon Pitney": {"points": 0, "cases": 0},
    "James Clark McReynolds": {"points": 0, "cases": 0},
    "Louis Brandeis": {"points": 0, "cases": 0},
    "John Hessin Clarke": {"points": 0, "cases": 0},
    "William Howard Taft": {"points": 0, "cases": 0},
    "George Sutherland": {"points": 0, "cases": 0},
    "Pierce Butler": {"points": 0, "cases": 0},
    "Edward Terry Sanford": {"points": 0, "cases": 0},
    "Harlan F. Stone": {"points": 0, "cases": 0},
    "Charles Evans Hughes": {"points": 0, "cases": 0},
    "Owen Roberts": {"points": 0, "cases": 0},
    "Benjamin N. Cardozo": {"points": 0, "cases": 0},
    "Hugo Black": {"points": 0, "cases": 0},
    "Stanley Forman Reed": {"points": 0, "cases": 0},
    "Felix Frankfurter": {"points": 0, "cases": 0},
    "William O. Douglas": {"points": 0, "cases": 0},
    "Frank Murphy": {"points": 0, "cases": 0},
    "Harlan F. Stone": {"points": 0, "cases": 0},
    "James F. Byrnes": {"points": 0, "cases": 0},
    "Robert H. Jackson": {"points": 0, "cases": 0},
    "Wiley Blount Rutledge": {"points": 0, "cases": 0},
    "Harold Hitz Burton": {"points": 0, "cases": 0},
    "Fred M. Vinson": {"points": 0, "cases": 0},
    "Tom C. Clark": {"points": 0, "cases": 0},
    "Sherman Minton": {"points": 0, "cases": 0},
    "Earl Warren": {"points": 0, "cases": 0},
    "John Marshall Harlan II": {"points": 0, "cases": 0},
    "William J. Brennan Jr.": {"points": 0, "cases": 0},
    "Charles Evans Whittaker": {"points": 0, "cases": 0},
    "Potter Stewart": {"points": 0, "cases": 0},
    "Byron White": {"points": 0, "cases": 0},
    "Arthur Goldberg": {"points": 0, "cases": 0},
    "Abe Fortas": {"points": 0, "cases": 0},
    "Thurgood Marshall": {"points": 0, "cases": 0},
    "Warren E. Burger": {"points": 0, "cases": 0},
    "Harry Blackmun": {"points": 0, "cases": 0},
    "Lewis F. Powell Jr.": {"points": 0, "cases": 0},
    "William Rehnquist": {"points": 0, "cases": 0},
    "John Paul Stevens": {"points": 0, "cases": 0},
    "Sandra Day O'Connor": {"points": 0, "cases": 0},
    "William Rehnquist": {"points": 0, "cases": 0},
    "Antonin Scalia": {"points": 0, "cases": 0},
    "Anthony Kennedy": {"points": 0, "cases": 0},
    "David Souter": {"points": 0, "cases": 0},
    "Clarence Thomas": {"points": 0, "cases": 0},
    "Ruth Bader Ginsburg": {"points": 0, "cases": 0},
    "Stephen Breyer": {"points": 0, "cases": 0},
    "John Roberts": {"points": 0, "cases": 0},
    "Samuel Alito": {"points": 0, "cases": 0},
    "Sonia Sotomayor": {"points": 0, "cases": 0},
    "Elena Kagan": {"points": 0, "cases": 0},
    "Neil Gorsuch": {"points": 0, "cases": 0},
    "Brett Kavanaugh": {"points": 0, "cases": 0},
    "Amy Coney Barrett": {"points": 0, "cases": 0},
    "Ketanji Brown Jackson": {"points": 0, "cases": 0}
}
//list of all important Cases and who supported who
let questions = [
    {
        "year": "(1896)",
        "party1": "Plessy",
        "party2": "Fergusson",
        "wiki":"https://en.wikipedia.org/wiki/Plessy_v._Ferguson",
        "summary": "Plessy v. Ferguson involved Homer Plessy, who was arrested for refusing to leave a whites-only railway car in Louisiana, challenging the state's Separate Car Act.",
        "party1sup": ["John Marshall Harlan"],
        "party2sup": ["Henry Billings Brown", "Melville Fuller", "Steven Johnson Field", "Horace Gray", "Rufus W. Packham", "George Shiras", "Edward Douglass White"]
    }
]

//Inserts the new question into the HTML Document
function nextQuestion(){
    let current = questions.shift()
    document.getElementById("headline").innerHTML = current.party1 + " v " + current.party2 + " " + current.year
    document.getElementById("summary").innerHTML = current.summary
    document.getElementById("wikipedia").setAttribute("href", current.wiki)
    document.getElementById("strongParty1").innerHTML = "Strongly " + current.party1
    document.getElementById("Party1").innerHTML = current.party1
    document.getElementById("Party2").innerHTML = current.party2
    document.getElementById("strongParty2").innerHTML = "Strongly " + current.party2
    return current
}

//Calculates Result after every Question
function calcResult(x, quota){

}
//current Question, needed for calculation
let now 
//first Question
now = nextQuestion()

document.getElementById("strongParty1").addEventListener("click", function(){
    let x = 2
    calcResult(now, x)
    now = nextQuestion()
})
document.getElementById("Party1").addEventListener("click", function(){
    let x = 1
    calcResult(now, x)
    now = nextQuestion()
})
document.getElementById("Party2").addEventListener("click", function(){
    let x = -1
    calcResult(now, x)
    now = nextQuestion()
})
document.getElementById("strongParty2").addEventListener("click", function(){
    let x = -2
    calcResult(now, x)
    now = nextQuestion()
})
document.getElementById("neutral").addEventListener("click", function(){
    now = nextQuestion()
})