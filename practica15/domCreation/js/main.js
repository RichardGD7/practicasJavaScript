let toDos = [
    {
      title: "Completar tarea 1",
      dueDate: "2023-11-10",
      completed: false,
    },
    {
      title: "Ir de compras",
      dueDate: "2023-11-15",
      completed: true,
    },
    {
      title: "Estudiar para el examen",
      dueDate: "2023-11-20",
      completed: false,
    },
    {
      title: "Hacer ejercicio",
      dueDate: "2023-11-25",
      completed: true,
    },
    {
      title: "Llamar a mamá",
      dueDate: "2023-11-30",
      completed: false,
    },
    {
      title: "Terminar proyecto",
      dueDate: "2023-12-05",
      completed: false,
    },
    {
      title: "Limpiar la casa",
      dueDate: "2023-12-10",
      completed: true,
    },
    {
      title: "Preparar la cena",
      dueDate: "2023-12-15",
      completed: false,
    },
    {
      title: "Leer un libro",
      dueDate: "2023-12-20",
      completed: false,
    },
    {
      title: "Hacer una caminata",
      dueDate: "2023-12-25",
      completed: true,
    },
  ];
  
  const taskCreation = (toDos) => {
    /*Creacion de cada etiqueta en el HTML*/
    let liTask = document.createElement("li");
    liTask.classList.add("list-group-item");
    liTask.classList.add("bg", toDos.completed ? "bg-success": "bg-danger")
    

    let inputTask = document.createElement("input");
    inputTask.classList.add("form-check-input","me-1");
    inputTask.setAttribute("type","checkbox");
    inputTask.checked = toDos.completed;
    inputTask.addEventListener("click",liTask.classList.add("bg","bg-success"))

  
    let labelTask = document.createElement("label");
    labelTask.classList.add("form-check-label");
    labelTask.innerText = `${toDos.title}: ${toDos.dueDate}`

    /*Creación de la estructura deseada con .append*/
    liTask.append(inputTask,labelTask)

    return liTask;
  }

  const printTask = (toDos) => {
    /*Jalar el nombre del contenedor a ingresar la estructura creada*/
    let ulContainer = document.getElementById("toDoList");
    /*Mandar llamar la funcion con la generación de la arquitectura a iterar*/
    let task = taskCreation(toDos)
    /*Hacer el push de la estructura (con append)*/ 
    ulContainer.append(task);
  }

  const printToDoList = (toDos) => {
    /*Generar la iteración para todos los objetos del array*/
    let ulContainer = document.getElementById("toDoList");
    ulContainer.innerHTML = "";
    toDos.forEach(task => {
      printTask(task)
    }); 
  }

  printToDoList(toDos);