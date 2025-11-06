const allInputs = document.querySelectorAll("input");

allInputs.forEach((input) => {
    input.setAttribute("required", "");
})

const inputEmail = document.querySelector("#email");
inputEmail.setAttribute("pattern", "[0-9a-zA-Z._%+-]+@canada\\.ca");

const firstButton = document.querySelector(".form__btns button");
const secondButton = firstButton.nextElementSibling;

secondButton.addEventListener("click", (event) => {
    // const fName = document.querySelector("firstname").value;
    // const lName = document.querySelector("lastname").value;
    // const email = document.querySelector("email").value;
    // const hireDate = document.querySelector("hire_date").value;
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0]; 
    const fileName = file.name;

    event.preventDefault();
    
    const profiles = [
        fileName,
        document.querySelector("#firstname").value, 
        document.querySelector("#lastname").value, 
        document.querySelector("#email").value, 
        document.querySelector("#hire_date").value
    ]

    const treeRow = document.createElement("tr");
    const treeLists = [];
    profiles.forEach((profile) => {
        const treeData = document.createElement("td");
        treeData.textContent = profile;
        console.log(profile)
        treeLists.push(treeData);
    })
    const employeeList = document.querySelector("#employeeList");
    employeeList.append(treeRow);
    const tr = treeRow;
    treeLists.forEach((td) => {
        console.log(td.textContent);
        if (td.textContent.includes(".png") || td.textContent.includes(".jpg")){
            const image = document.createElement("img");
            image.src = "./images/" + file.name;
            console.log(file.name);
            td.textContent = "";
            td.appendChild(image);
            tr.append(td)
        } else {
            tr.append(td);
        }
    })
    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "delete";
    buttonDelete.addEventListener("click", (event) => {
        event.target.closest("tr").remove();
    });
    tr.append(buttonDelete);

})
