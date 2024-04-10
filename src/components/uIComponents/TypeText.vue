<template>
    <span :class="`py-[6px] px-2 bg-${color} bg-opacity-[.15] rounded`">
        <span :class="`text-sm text-${color}`">{{ text }}</span>
    </span>
</template>
<script>

export default {    
    props: ['color', 'text']
}
</script>