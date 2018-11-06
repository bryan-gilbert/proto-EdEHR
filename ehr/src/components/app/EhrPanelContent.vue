<template>
  <div :class="$options.name">
     <div contentItemKey="progressNote">
        <ui-button v-on:buttonClicked="addNote">Add a new progress note</ui-button>
        <div  :class="`${$options.name}__main`">
           <table class="table">
              <thead>
              <tr>
                 <th><span title="Name">Name</span></th>
                 <th><span title="Position">Position</span></th>
                 <th><span title="Unit">Unit</span></th>
                 <th><span title="Day">Day</span></th>
                 <th><span title="Time">Time</span></th>
                 <th><span title="Progress Notes">Progress Notes</span></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in progressNotes">
                 <td>{{ item.name }}</td>
                 <td>{{ item.position }}</td>
                 <td>{{ item.unit }}</td>
                 <td>{{ item.day }}</td>
                 <td>{{ item.time }}</td>
                 <td>{{ item.notes }}</td>
              </tr>
              </tbody>
           </table>
        </div>
        <div  :class="`${$options.name}__data`">
           <li v-for="(value, propertyName) in userInformation">
              {{ propertyName }} :  {{ value }}
           </li>
        </div>
     </div>
  </div>
</template>

<script>
  import UiButton from '../ui/UiButton.vue';
  import bus from "../eventBus.js"

export default {
  name: `EhrPanelContent`,
  components: {
    UiButton
  },
  data: function () {
    return {
      count: 0
    }
  },
  computed: {
    userInformation () {
      let userInfo = this.$store.state.sUserInfo
      if(userInfo) {
        console.log("EhrPanelContent this.$store.state.sUserInfo ltiConsumerKey", userInfo.ltiConsumerKey)
        return userInfo
      }
      return {}
    },
    progressNotes () {
      let userData = this.$store.state.sUserData
      if(userData) {
        console.log("EhrPanelContent this.$store.state.sUserData", userData.progressNotes)
        return userData.progressNotes
      }
      return {}
    }
  },
  methods: {
    addNote: function(event) {
      console.log("EhrPanelContent Add note clicked ", event.target.textContent)
      var newRow = {
        name: getName(),
        position: 'Nurse',
        unit: 'ER',
        day: '0',
        time: '07:00',
        notes: getPhrase(15)
      }
      this.$store.dispatch('addPNotes',{note: newRow})
      // this.progressNotes.push(newRow);
    }
  }
};

  function getPhrase (cnt) {
    let p = []
    for (var i = 0; i < cnt; i++) {
      p.push(getWord())
    }
    return p.join(' ')
  }
  function getWord () {
    var r = Math.floor(Math.random() * wordList.length)
    return wordList[r]
  }
  function getName () {
    var r = Math.floor(Math.random() * nameList.length)
    return nameList[r]
  }

  const wordList = ['abhorrent',
    'acceptable',
    'acid',
    'acoustics',
    'action',
    'actor',
    'ad hoc',
    'adjoining',
    'adorable',
    'adventurous',
    'advertisement',
    'amused',
    'animated',
    'answer',
    'apologise',
    'appliance',
    'appreciate',
    'argue',
    'astonishing',
    'auspicious',
    'average',
    'avoid',
    'ban',
    'berserk',
    'bird',
    'bit',
    'bite',
    'bleach',
    'bless',
    'boat',
    'brief',
    'bubble',
    'busy',
    'call',
    'camp',
    'caption',
    'care',
    'cat',
    'cause',
    'cent',
    'certain',
    'changeable',
    'charge',
    'cheap',
    'cheerful',
    'circle',
    'clever',
    'coach',
    'coast',
    'coil',
    'communicate',
    'competition',
    'complete',
    'condemned',
    'control',
    'creepy',
    'crook',
    'crowd',
    'crown',
    'cruel',
    'cub',
    'cumbersome',
    'cure',
    'curly',
    'current',
    'daily',
    'death',
    'debt',
    'deceive',
    'delightful',
    'desert',
    'detect',
    'difficult',
    'dinosaurs',
    'direful',
    'discovery',
    'discreet',
    'disgusting',
    'dolls',
    'donkey',
    'door',
    'doubt',
    'doubtful',
    'drag',
    'drawer',
    'dreary',
    'driving',
    'drown',
    'drum',
    'dusty',
    'ear',
    'easy',
    'eight',
    'elbow',
    'electric',
    'enchanting',
    'engine',
    'enormous',
    'exciting',
    'exclusive',
    'expensive',
    'fabulous',
    'faithful',
    'familiar',
    'fancy',
    'far-flung',
    'faulty',
    'field',
    'finicky',
    'five',
    'flaky',
    'flight',
    'flippant',
    'flock',
    'fluffy',
    'fly',
    'four',
    'fresh',
    'friends',
    'frighten',
    'fuel',
    'furtive',
    'fuzzy',
    'gamy',
    'general',
    'glamorous',
    'gray',
    'grease',
    'grip',
    'groan',
    'growth',
    'gullible',
    'guttural',
    'half',
    'handle',
    'harass',
    'harm',
    'hat',
    'head',
    'heat',
    'help',
    'helpful',
    'here',
    'holistic',
    'honourable',
    'hook',
    'hover',
    'hypnotic',
    'ice',
    'imminent',
    'improve',
    'inform',
    'inject',
    'injure',
    'intelligent',
    'interest',
    'interesting',
    'invincible',
    'island',
    'joke',
    'judge',
    'kettle',
    'kindhearted',
    'knot',
    'land',
    'learned',
    'lethal',
    'lettuce',
    'level',
    'likeable',
    'lock',
    'locket',
    'loud',
    'makeshift',
    'male',
    'mask',
    'material',
    'materialistic',
    'measure',
    'mess up',
    'milk',
    'mind',
    'minister',
    'mist',
    'mom',
    'mundane',
    'neighborly',
    'nerve',
    'new',
    'nine',
    'nod',
    'noiseless',
    'null',
    'offend',
    'offer',
    'old',
    'one',
    'optimal',
    'outrageous',
    'overt',
    'peel',
    'perfect',
    'periodic',
    'pets',
    'picayune',
    'planes',
    'plant',
    'pleasure',
    'polite',
    'pop',
    'pour',
    'power',
    'premium',
    'pricey',
    'produce',
    'psychotic',
    'punishment',
    'quack',
    'quarter',
    'rail',
    'railway',
    'rapid',
    'reach',
    'realise',
    'recondite',
    'record',
    'reign',
    'relieved',
    'religion',
    'remarkable',
    'remind',
    'repair',
    'resonant',
    'rhythm',
    'rifle',
    'rock',
    'rough',
    'ruddy',
    'rule',
    'scared',
    'scary',
    'screeching',
    'screw',
    'seashore',
    'secret',
    'secretary',
    'serious',
    'sheep',
    'shiny',
    'shirt',
    'shop',
    'silent',
    'sloppy',
    'slow',
    'songs',
    'soothe',
    'sour',
    'spark',
    'sparkling',
    'spell',
    'spiritual',
    'spoon',
    'squash',
    'stamp',
    'step',
    'stick',
    'stiff',
    'stitch',
    'stomach',
    'stone',
    'stormy',
    'strong',
    'stuff',
    'suggestion',
    'superb',
    'support',
    'suspend',
    'synonymous',
    'talented',
    'tame',
    'taste',
    'tasteful',
    'tasty',
    'tax',
    'tendency',
    'test',
    'thirsty',
    'thumb',
    'time',
    'tiresome',
    'toes',
    'tongue',
    'toothpaste',
    'toothsome',
    'top',
    'tour',
    'trashy',
    'tray',
    'treatment',
    'trousers',
    'trucks',
    'true',
    'tub',
    'tug',
    'turn',
    'two',
    'unbecoming',
    'uneven',
    'unite',
    'unkempt',
    'unnatural',
    'unwieldy',
    'use',
    'useful',
    'vacuous',
    'vague',
    'valuable',
    'vast',
    'verdant',
    'versed',
    'victorious',
    'voyage',
    'wail',
    'wash',
    'wet',
    'whimsical',
    'whip',
    'whirl',
    'wide',
    'wide-eyed',
    'wild',
    'wire',
    'wiry',
    'woman',
    'wood',
    'wool',
    'worm',
    'wrestle',
    'yellow',
    'yummy',
    'zesty',
  ]

   const nameList = [
     "Livia Kerekes",
     "Sidney Mroz",
     "Alida Maltby",
     "Magdalen Virgil",
     "Sarai Lucien",
     "Evangeline Moctezuma",
     "Otis Hosford",
     "Tari Rowell",
     "Alyssa Recker",
     "Janelle Clark",
     "Lois Marchi",
     "Tanya Brandenberger",
     "Naomi Nanez",
     "Sharon Glen",
     "Ashlea Works",
     "Gaylene Gustavson",
     "Wendi Medlen",
     "Valrie Steverson",
     "Kiara Krawiec",
     "Merle Garner"
   ]
</script>

<style lang="scss" scoped>
.EhrPanelContent {
  padding: 1rem;

   &__main {
      font-size: 0.8rem;

      .table th {
         border-bottom: 2px solid #979797
      }
   }
}
</style>
