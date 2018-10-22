<template>
  <div :class="$options.name">
    <ui-intro :class="`${$options.name}__intro`">
      <div class="columns" :class="`${$options.name}__content`">
        <div class="column" :class="`${$options.name}__content_row--1`">
          <ul>
            <li>
              <b>Last,First, Middle names</b>
            </li>
            <li>
              Date of Birth: <b>DD-MM-YYY</b>
            </li>
            <li>
              Age: <b>74</b>
            </li>
            <li>
              Gender: <b>gender</b>
            </li>
            <li>
              Wieght: <b>## kg</b>
            </li>
          </ul>
        </div>
        <div class="column" :class="`${$options.name}__content_row--2`">
          <ul>
            <li>
              Code Status: <b>example</b>
            </li>
            <li>
              PHN: <b>#####</b>
            </li>
            <li>
              MRN: <b>#####</b>
            </li>
            <li>
              MRP: <b>Last, first</b>
            </li>
            <li>
              MRP Phone: <b>(###)-###-####</b>
            </li>
          </ul>
        </div>
        <div class="column" :class="`${$options.name}__content_row--3`">
          <ul>
            <li>
              Admitting Diagnosis: <b>example</b>
            </li>
            <li>
              Alergies: <b>example, example, example</b>
            </li>
            <li>
              Location: <b>example</b>
            </li>
            <li>
              Isolation Precautions: <b>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</b>
            </li>
          </ul>
        </div>
      </div>
    </ui-intro>
  </div>
</template>

<script>
  import UiIntro from '../ui/UiIntro';

export default {
  name: `EhrBanner`,
  components: {
    UiIntro,
  },
  props: {
    action: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/wrapper.mixin';

.EhrBanner {
  @include wrapper(s);
  width: 100%;
  background-color: #e9ebed;
  color: #63666C;
  // Todo fix this force height in a more repsonsive manner
//  height: 140px;

  &__content {
    margin:0;
    padding: 0 1rem;
    font-size: .8rem;
  }
  &__content_row--1 {
    flex-grow: 0.8;
  }
  &__content_row--2 {
    flex-grow: 0.9;
  }
  &__content_row--3 {
    flex-grow: 1.5;
  }
}
</style>
