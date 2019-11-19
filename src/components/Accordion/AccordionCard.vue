<template>
  <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0 header-card">
                <button class="btn btn-link" v-on:click="toggleAccordion()" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {{ this.data.name ? this.data.name : "Cria vergonha e coloque um nome no seu github!!!"}}
                </button>
                <span class="fa fa-save fa-xs"></span>
            </h2>
        </div>

        <div id="collapseOne" class="collapse" v-bind:class="isActive ? 'show' : ''" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                <img :src="this.data.avatar_url" alt="">
                {{this.data.bio ? this.data.bio : "Caramba, você também não tem nem a BIO do GitHub? Não é possível..."}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccordionCard',
    props: {
        data: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleAccordion(){
            this.isActive = !this.isActive;
        }
    },
    computed: {
        vai(){
            console.log(this.data)
        }
    }
}
</script>

<style lang="scss">
.header-card{
    display: flex;
    justify-content: space-between;
    width: 100%;
    span {
        cursor: pointer;
    }
}
</style>