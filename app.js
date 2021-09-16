/*const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ fname: "vineet"});
    }, 2000);
});
promise.then((name) => {
    console.log(name.fname)
});*/


/*const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ fname: "Puja" });
    }, 2000);
});
promise.then((name) => {
    console.log(name.fname);
});*/


/*const nameInfo = (firstName, secondName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ fname: firstName, sname: secondName });
        }, 3000);
    });
};
const hobbiesInfo = (firstName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Cooking", "Swimming", "Movies"]);
            }, 3000);
    });
};
const favMovies = (hobby) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Arrival", "Interstellar", "Shutter Island"]);
        }, 3000);
    });
};
nameInfo("Puja", "Chaudhury")
.then((names) => hobbiesInfo(names))
.then((hobbies) => hobbiesInfo(hobbies))
.then((movies) => favMovies(movies))
.then((movie) => console.log(movie[0]));*/

/*console.log("Hello");

const asyncexample = (givenname, callback) => {
    setTimeout(() => {
        callback({ name: givenname });
    },3000);
};

const names = asyncexample("i am Vineet", names => {
    console.log(names)
});
console.log("end");*/

/*const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({fname:'vineet'})
    },3000);
});
promise.then(name => {
    console.log(name.fname)
})*/

const nameinfo = (firstname, secondname) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({fname:firstname, sname:secondname});
        },3000);
    });
};

const hobbiesInfo = (firstname) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["cooking","swimming","movies"])
        },3000);
    });
};

const favMovies = (hobby) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["arrival", "shutter", "island"])
        },3000);
    });
};

async function userInfo() {
    const names = await nameInfo("Puja", "Chaudhury");
    const hobbies = await hobbiesInfo(names.fname);
    const movies = await favMovies(hobbies[0]);
    console.log(movies[0]);}userInfo();

/*nameinfo("vineet", "chhillar")
.then((names) => hobbiesInfo(names))
.then((hobbies) => hobbiesInfo(hobbies))
.then((movies) => favMovies(movies))
.then((movie) => console.log(movie))*/




/*const names = nameinfo("vineet", "chhillar");
names.then((value) => {
    console.log(value);
    // expected output: "Success!"
});*/

