async function foo(){
    const data = await fetch('http://localhost:3000/users');
    const result = await data.json();
    console.log(result);
    const string = JSON.stringify(result)
    document.getElementById('container').textContent = string
}

foo()
