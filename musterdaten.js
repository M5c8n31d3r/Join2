let musterUsers = [
  {
    id: 0,
    name: "guest",
    email: "guest@guest.de",
    password: "",
    initials: "",
    picture: "",
    phone: "",
    isUser: true
  },
  {
    id: 1,
    name: "Dennis Schneider",
    email: "dennis@schneider",
    password: "11111111",
    initials: "DS",
    picture: "",
    phone: "+49 160 12345678",
    isUser: true
  },
  {
    id: 2,
    name: "Michael Schneider",
    email: "michael@schneider",
    password: "12345678",
    initials: "MS",
    picture: "",
    phone: "+49 168 87654321",
    isUser: true
  },
  {
    id: 3,
    name: "Kay Beckmann",
    email: "kay@beckmann",
    password: "abcdef",
    initials: "KB",
    picture: "",
    phone: "+49 1637 164850",
    isUser: true
  },
  {
    id: 4,
    name: "Arnold Schwarznegger",
    email: "Conan@barbar.at",
    password: "conan123",
    initials: "AS",
    picture: "",
    phone: "+49 1367 164850",
    isUser: true
  },
  {
    id: 5,
    name: "Bill Gates",
    email: "mister@bestpasta.it",
    password: "abcdef",
    initials: "BG",
    picture: "",
    phone: "+49 16137 164850",
    isUser: true
  }
];

let musterTasks = [
  {
    id: 0,
    title: "Muster Daten löschen",
    description:
      "Nachdem die Intigration des Backend läuft, können die Musterdaten gelöscht werden.",
    priority: -1,
    category: {
      id: 3,
      name: "Product management",
      color: "var(--magenta)"
    },
    assignedTo: [3],
    dueDate: 1681603200000,
    state: "ToDo",
    subtask: [
      {
        done: false,
        description: "Musterdaten.js löschen"
      },
      {
        done: false,
        description: "Musterdaten.js aus index.js entfernen"
      }
    ]
  },
  {
    id: 1,
    title: "Mobile first",
    description:
      "Alle Layouts werden erst für die Mobilansicht erstellt und dann für den Desktop optimiert",
    priority: 0,
    category: {
      id: 2,
      name: "Backoffice",
      color: "var(--red)"
    },
    assignedTo: [1],
    dueDate: 1678838400000,
    state: "progress",
    subtask: []
  },
  {
    id: 2,
    title: "Dritte Musteraufgabe",
    description: "Ich würde ja jetzt Lorem machen, aber das geht in js nicht",
    priority: 1,
    category: {
      id: 0,
      name: "Marketing",
      color: "var(--orange)"
    },
    assignedTo: [2],
    dueDate: 1679961600000,
    state: "done",
    subtask: [
      {
        done: true,
        description: "Musterdaten.js löschen"
      },
      {
        done: false,
        description: "Musterdaten.js aus index.js entfernen"
      }
    ]
  }
];

let musterCategories = [
  {
    id: 0,
    name: "Marketing",
    color: "var(--orange)"
  },
  {
    id: 1,
    name: "Sales",
    color: "var(--light-blue)"
  },
  {
    id: 2,
    name: "Backoffice",
    color: "var(--red)"
  },
  {
    id: 3,
    name: "Product management",
    color: "var(--magenta)"
  }
];

function resetMusterdaten() {
  users.splice(0, users.length);
  for (let i = 0; i < musterUsers.length; i++) {
    users.push(musterUsers[i]);
  }
  backend.setItem("users", users);
  console.log("Userdaten zurück gesetzt");

  tasks.splice(0, tasks.length);
  for (let i = 0; i < musterTasks.length; i++) {
    tasks.push(musterTasks[i]);
  }
  backend.setItem("tasks", tasks);
  console.log("Tasks zurück gesetzt");

  categories.splice(0, categories.length);
  for (let i = 0; i < musterCategories.length; i++) {
    categories.push(musterCategories[i]);
  }
  backend.setItem("categories", categories);
  console.log("Categories zurück gesetzt");
}
