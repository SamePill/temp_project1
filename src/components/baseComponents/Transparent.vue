<template>
    <div v-show="isVisible" class="popup-mask">
        <div  class="popup-wrap">
            <div class="popup-container" style="display: flex; justify-content: center;" :style="style">
                <slot>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue'

export default {
    props: {
        width:{
            type: Number,
        }
    },
    setup() {
        const isVisible = ref(false);

        const open = () => {
            isVisible.value = true;
            document.body.classList.add("modal-open");
            const body = document.querySelector('body');
            body.style.overflow = 'hidden'
        };
        const close = () => {
            isVisible.value = false;
            document.body.classList.remove("modal-open");
            const body = document.querySelector('body');
            body.style.overflow = 'scroll'
        }
        return {
            isVisible,
            open,
            close
        }
    },computed:{
        style(){
            return {'width' : this.width+'px'}
        }
    }
}
</script>
<style scoped>
.popup-container{
    /* width: var(--width); */
}
/* 팝업 */
.popup-mask {
    position: fixed;
    z-index: 3000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: table;
    transition: opacity .3s ease;
    /* overflow: hidden; */
}
.popup-wrap {
    display: table-cell;
    vertical-align: middle;
}
.popup-container {
    display: block;
    width: 1280px;
    margin: 0px auto;
    padding:0px;
    background-color: rgba(12, 46, 148, 0);
    border-radius: 10px;
    
    transition: all .3s ease;
}
</style>