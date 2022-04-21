import {computed, nextTick, onMounted, reactive, watch} from "vue";

export function useCounter() {
    const counterData = reactive({
        count: 0,
        title: 'My Object Counter'
    });

    watch(() => counterData.count, (newCount, oldCount) => {
        if (newCount == 20) {
            alert('You made it 20!! Go ahead... ')
        }
    });

    const oddOrEven = computed(() => {
        if (counterData.count % 2 === 0) {
            return 'even';
        } else {
            return 'odd';
        }
    });

    const increaseCounter = (amount, e) => {
        counterData.count = counterData.count + amount;
        nextTick(() => {
            console.log("do something after dom had updated")
        });
    };

    const decreaseCounter = (amount) => {
        counterData.count = counterData.count - amount;
    };

    onMounted(() => {
        console.log('Related to counter');
    });

    return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter,
    }
}