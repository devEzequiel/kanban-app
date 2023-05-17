<template>
  <main class="main">
    <p class="title">Todas as aplicações</p>
    <div class="filter">
      <p class="filter__title">Filtros</p>
      <div class="filter__content">
        <div class="filter__input__search">
          <input placeholder="Buscar por nome"/>
          <div style="width: 16px">
            <Icon name="search.svg"/>
          </div>
        </div>
        <select class="filter__select">
          <option selected value="" disabled>Filtrar por desafio</option>
          <option class="filter__option">s</option>
        </select>
        <select class="filter__select">
          <option selected value="" disabled>Filtrar por avaliação</option>
          <option class="filter__option">s</option>
        </select>
        <button class="filter__button">Buscar</button>
      </div>
    </div>
    <div class="card__todo">
      <div style="margin-top: 20px; width: 320px" v-for="task in tasks">
        <p class="card__todo__title">{{ task.name }}
          <Icon name="littleball.svg"/>
        </p>
        <div class="card__todo__box">
          <Card v-for="info in task.applications" :card="info" @click="setInfoModal(info)"/>
        </div>
      </div>
    </div>
    <ModalToDo :view="modalView" :toggleModal="toggleModal" :data="modalInfo"/>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Icon from "../../components/Icon.vue";
import Card from "../../components/Card.vue";
import ModalToDo from "../../components/Modal/ToDo.vue";

export default defineComponent({
  name: "Home",
  components: {Icon, Card, ModalToDo},
  data() {
    return {
      modalView: false,
      modalInfo: {},
      tasks: [
        {
          "id": 1,
          "name": "Primeira Etapa",
          "applications": [
            {
              "id": 1,
              "startup": {
                "id": 1,
                "name": "Startup A"
              },
              "challenge": {
                "id": 1,
                "name": "Desafio B"
              },
              "score": 3.6,
              "assignee": {
                "id": 1,
                "email": "usuario1@empresa.com",
                "name": "Usuário 1"
              }, // null
              "comments": [
                {
                  "id": 1,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                }
              ],
              "due_date": "15 Mai", // null
              "attachments": [
                {
                  "id": "1",
                  "filename": "exemplo.jpg",
                  "full_path": "pasta/arquivo/3dfb8a9c83.jpg",
                }
              ],
              "tasks": [
                {
                  "id": 1,
                  "name": "Tarefa 1",
                  "due_date": new Date(2023, 2, 1), // null
                  "assignee": {
                    "id": 2,
                    "email": "usuario2@empresa.com",
                    "name": "Usuário 2",
                  }, // null
                  "status": "todo",
                  "section": {
                    "id": 1,
                    "name": "Primeira Etapa"
                  },
                },
                {
                  "id": 2,
                  "name": "Tarefa 2",
                  "due_date": new Date(2023, 2, 8), // null
                  "assignee": {
                    "id": 1,
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1",
                  }, // null
                  "status": "doing",
                  "section": {
                    "id": 2,
                    "name": "Segunda Etapa"
                  },
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Segunda Etapa",
          "applications": [
            {
              "id": 1,
              "startup": {
                "id": 1,
                "name": "Startup A"
              },
              "challenge": {
                "id": 1,
                "name": "Desafio B"
              },
              "score": 4.5,
              "assignee": {
                "id": 1,
                "email": "usuario1@empresa.com",
                "name": "Usuário 1"
              }, // null
              "comments": [
                {
                  "id": 1,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                },
                {
                  "id": 1,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                },
                {
                  "id": 1,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                }
              ],
              "due_date": "22 Mai", // null
              "attachments": [
                {
                  "id": "1",
                  "filename": "exemplo.jpg",
                  "full_path": "pasta/arquivo/3dfb8a9c83.jpg",
                },
                {
                  "id": "1",
                  "filename": "image.jpg",
                  "full_path": "pasta/arquivo/d3dfb8a9c83.jpg",
                }
              ],
              "tasks": [
                {
                  "id": 1,
                  "name": "Tarefa 1",
                  "due_date": new Date(2023, 2, 1), // null
                  "assignee": {
                    "id": 2,
                    "email": "usuario2@empresa.com",
                    "name": "Usuário 2",
                  }, // null
                  "status": "todo",
                  "section": {
                    "id": 1,
                    "name": "Primeira Etapa"
                  },
                },
                {
                  "id": 2,
                  "name": "Tarefa 2",
                  "due_date": new Date(2023, 2, 8), // null
                  "assignee": {
                    "id": 1,
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1",
                  }, // null
                  "status": "doing",
                  "section": {
                    "id": 2,
                    "name": "Segunda Etapa"
                  },
                }
              ]
            },
            {
              "id": 2,
              "startup": {
                "id": 1,
                "name": "Startup A"
              },
              "challenge": {
                "id": 1,
                "name": "Desafio B"
              },
              "score": 4.5,
              "assignee": {
                "id": 1,
                "email": "usuario1@empresa.com",
                "name": "Usuário 1"
              }, // null
              "comments": [
                {
                  "id": 1,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                }, {
                  "id": 1,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                }, {
                  "id": 1,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                }
              ],
              "due_date": "22 Mai", // null
              "attachments": [
                {
                  "id": "1",
                  "filename": "exemplo.jpg",
                  "full_path": "pasta/arquivo/3dfb8a9c83.jpg",
                },
                {
                  "id": "1",
                  "filename": "image.jpg",
                  "full_path": "pasta/arquivo/d3dfb8a9c83.jpg",
                }
              ],
              "tasks": [
                {
                  "id": 1,
                  "name": "Tarefa 1",
                  "due_date": new Date(2023, 2, 1), // null
                  "assignee": {
                    "id": 2,
                    "email": "usuario2@empresa.com",
                    "name": "Usuário 2",
                  }, // null
                  "status": "todo",
                  "section": {
                    "id": 1,
                    "name": "Primeira Etapa"
                  },
                },
                {
                  "id": 2,
                  "name": "Tarefa 2",
                  "due_date": new Date(2023, 2, 8), // null
                  "assignee": {
                    "id": 1,
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1",
                  }, // null
                  "status": "doing",
                  "section": {
                    "id": 2,
                    "name": "Segunda Etapa"
                  },
                }
              ]
            },
          ],
        },
        {
          "id": 3,
          "name": "Terceira Etapa",
          "applications": [
            {
              "id": 3,
              "startup": {
                "id": 1,
                "name": "Startup C"
              },
              "challenge": {
                "id": 1,
                "name": "Desafio R"
              },
              "score": 5.0,
              "assignee": {
                "id": 1,
                "email": "usuario1@empresa.com",
                "name": "Usuário 1"
              }, // null
              "comments": [
                {
                  "id": 1,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                }, {
                  "id": 2,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                }
              ],
              "due_date": "25 Mai", // null
              "attachments": [
                {
                  "id": "1",
                  "filename": "exemplo.jpg",
                  "full_path": "pasta/arquivo/3dfb8a9c83.jpg",
                },
                {
                  "id": "1",
                  "filename": "file.pdf",
                  "full_path": "pasta/arquivo/d3dfb8a9we.pdf",
                }
              ],
              "tasks": [
                {
                  "id": 1,
                  "name": "Tarefa 1",
                  "due_date": new Date(2023, 2, 1), // null
                  "assignee": {
                    "id": 2,
                    "email": "usuario2@empresa.com",
                    "name": "Usuário 2",
                  }, // null
                  "status": "todo",
                  "section": {
                    "id": 1,
                    "name": "Primeira Etapa"
                  },
                },
                {
                  "id": 2,
                  "name": "Tarefa 2",
                  "due_date": new Date(2023, 2, 8), // null
                  "assignee": {
                    "id": 1,
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1",
                  }, // null
                  "status": "doing",
                  "section": {
                    "id": 2,
                    "name": "Segunda Etapa"
                  },
                }
              ]
            },
            {
              "id": 2,
              "startup": {
                "id": 1,
                "name": "Startup A"
              },
              "challenge": {
                "id": 1,
                "name": "Desafio B"
              },
              "score": 4.5,
              "assignee": {
                "id": 1,
                "email": "usuario1@empresa.com",
                "name": "Usuário 1"
              }, // null
              "comments": [
                {
                  "id": 1,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                }, {
                  "id": 1,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                }, {
                  "id": 1,
                  "author": {
                    "id": "1",
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1"
                  }
                }
              ],
              "due_date": "22 Mai", // null
              "attachments": [
                {
                  "id": "1",
                  "filename": "exemplo.jpg",
                  "full_path": "pasta/arquivo/3dfb8a9c83.jpg",
                },
                {
                  "id": "1",
                  "filename": "image.jpg",
                  "full_path": "pasta/arquivo/d3dfb8a9c83.jpg",
                }
              ],
              "tasks": [
                {
                  "id": 1,
                  "name": "Tarefa 1",
                  "due_date": new Date(2023, 2, 1), // null
                  "assignee": {
                    "id": 2,
                    "email": "usuario2@empresa.com",
                    "name": "Usuário 2",
                  }, // null
                  "status": "todo",
                  "section": {
                    "id": 1,
                    "name": "Primeira Etapa"
                  },
                },
                {
                  "id": 2,
                  "name": "Tarefa 2",
                  "due_date": new Date(2023, 2, 8), // null
                  "assignee": {
                    "id": 1,
                    "email": "usuario1@empresa.com",
                    "name": "Usuário 1",
                  }, // null
                  "status": "doing",
                  "section": {
                    "id": 2,
                    "name": "Segunda Etapa"
                  },
                }
              ]
            },
          ],
        },
      ]

    }
  },
  methods: {
    setInfoModal(info){
      this.modalInfo = info;
      this.modalView = true;
    },
    toggleModal() {
      this.modalView = !this.modalView
    }
  }
})
</script>

<style scoped>
.main {
  @apply flex flex-col w-full;
  padding: 30px 0 30px 15px;
  margin-left: 80px;
  width: calc(100% - 15px);
}

.title {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  color: #272727;
  margin-bottom: 20px;
}

.filter {
  @apply p-5 w-full;
  height: 125px;
  background: #FFFFFF;
  border-bottom: 1px solid #DFDFDF;
  border-radius: 4px;
}

.filter__title {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #272727;
}

.filter__content {
  @apply flex mt-5;
  overflow-x: auto;
  width: 100%;
  gap: 20px;
}

.filter__input__search {
  @apply flex items-center justify-between;
  min-width: 648px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #CED4DA;
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 10px;
  gap: 5px;
}

.filter__input__search input {
  @apply w-full;
}

.filter__input__search input:focus {
  border: none;
  outline: none;
}

.filter__select {
  min-width: 255px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #CED4DA;
  border-radius: 4px;
}

@media (max-width: 1600px) {
  .filter__input__search {
    min-width: 400px;
  }

  .filter__select{
    min-width: 180px;
  }
}

.filter__select:focus {;
  outline: none;
}

.filter__option {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212529;
  background: #fff;
}

.filter__button {
  width: 80px;
  height: 36px;
  background: #951B81;
  border-radius: 4px;
  padding: 6px 12px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
}

.card__todo {
  display: flex;
  gap: 20px;
  width: calc(100vw - 100px);
  overflow-x: auto;
}

.card__todo__title {
  @apply flex justify-between;
  width: 100%;
  height: 20px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #272727;
  margin-bottom: 18px;
}

.card__todo__title img {
  height: 8px;
}

.card__todo__box {
  @apply flex flex-col;
  gap: 8px;
  width: 320px;
  background: #E9ECEF;
  border-radius: 4px;
  padding: 8px 0;
}
</style>
