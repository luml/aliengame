import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bestHooman: false,
    uiState: "start",
    characterChoices: ['baker', 'mechanic', 'artist', 'coder'],
    character: '',
    questionIndex: 0,
    score: 0,
    questions: [
      {
        question: "What's your dog's name?",
        baker: "Woofgang Puck",
        mechanic: "Alf",
        artist: "Salvador Dogi",
        coder: "Teal Tea Cup",
      },
      {
        question: "What's your favorite hobby?",
        baker: "Extreme ironing",
        mechanic: "Bacon santa cosplay",
        artist: "Mimosas",
        coder: "Drinking",
      },
      {
        question: "What's your favorite color?",
        baker: "turquoise",
        mechanic: "yellow",
        artist: "transparent",
        coder: "Night Dark",
      },
      {
        question: "Is cereal soup?",
        baker: "You can't be serieal",
        mechanic: "Yes, I am Jason Lengstorf",
        artist: "wut",
        coder: "Might be",
      },
      {
        question: "What’s the most imaginative insult you can come up with?",
        baker: "You're a substitute teacher with no lesson plan",
        mechanic: "Yer face is a melted welly",
        artist: "You eat buttons off the remote",
        coder: "You don't even understand what you jusr copied",
      },
      {
        question: "If peanut butter wasn’t called peanut butter, what would it be called?",
        baker: "legoome",
        mechanic: "brown paste",
        artist: "groundnut smoosh",
        coder: "Bread cream",
      },
    ],
  },
  mutations: {
    isBestHooman(state) {
      if (state.score >= 60) state.bestHooman = true;
    },
    pickCharacter(state, character) {
      state.character = character
    },
    updateUIState(state, uiState) {
      state.uiState = uiState
    },
    pickQuestion(state, character) {
      character === state.character ? state.score += 10 : state.score -= 10

      if (state.questionIndex < state.questions.length - 1) {
        state.questionIndex++
      } else {
        Math.sign(state.score) > 0 ? state.uiState = 'won' : state.uiState = 'lost'
      }
    },
    restartGame(state) {
      state.uiState = "start"
      state.score = 0
      state.questionIndex = 0
    },
  },
  actions: {},
  modules: {},
})


