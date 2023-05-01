<script lang="ts">

    import suite from "../validation/feedback_suite";
    import Input from "../Components/Input.svelte";
    import classnames from "vest/classnames";
    import { feedbackStore } from "../stores/FeedbackStore";
    import TextArea from "../Components/TextArea.svelte";

    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';

    let formState : { 
        name? : string, 
        email? : string, 
        feedback? : string 
    } = {};

    let namePending = false;
    let result = suite.get();

    const handleChange = (name) => {
        result = suite(formState, name)
    };

    $: cn = classnames(result, {
        warning: "warning",
        invalid: "error",
        valid: "success"
    });

    $: disabled = !result.isValid();

    const initialFormState = {
        name: '',
        email: '',
        feedback: ''
    };

    const handleSubmit = () => {
        const { name, email, feedback } = formState;
        const newFeedback = { name, email, feedback };
        feedbackStore.update(feedbacks => [...feedbacks, newFeedback]);
        toastr.success('Feedback submitted successfully!')
        formState = initialFormState;
    };

</script>

<div class="w-full p-6">
    <div class="text-3xl font-bold text-center">
        Feedback
    </div>
    <hr class="h-px my-5 bg-gray-200 border-0" />
</div>
<div class="w-full px-6 flex justify-between max-sm:flex-col">

    <form on:submit|preventDefault = {handleSubmit} action="" class="w-96 p-5 border-2 border-slate-700 rounded-2xl hover:border-green-600 max-lg:w-2/4 max-lg:me-5 max-sm:w-full">
        <div class="my-5">
            <Input
                name="name"
                label="Name"
                bind:value = {formState.name}
                onInput={handleChange}
                pending={namePending}
                validityclass={cn('name')}
                messages = {result.getErrors('name')}
            />
        </div>

        <div class="my-5">
            <Input
                name="email"
                label="Email-id"
                bind:value = {formState.email}
                onInput={handleChange}
                validityclass={cn('email')}
                messages = {result.getErrors('email')}
            />
        </div>

        <div class="my-5">
            <TextArea
                name="feedback"
                label="Your Feedback"
                bind:value = {formState.feedback}
                onInput={handleChange}
                validityclass={cn('feedback')}
                messages = {result.getErrors('feedback')}
            />
        </div>

        <div class="mt-7 flex">
            <button type="submit" class="w-full bg-slate-700 text-white font-bold uppercase me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:bg-green-600 hover:text-black hover:shadow-xl max-sm:text-sm" disabled={disabled}>Submit</button>
        </div>

    </form>

    <div class="w-96 p-6 flex-rows text-lg border-2 border-slate-700 rounded-2xl hover:border-green-600 hover:shadow-xl max-lg:w-2/4 max-sm:w-full max-sm:mt-5">
        
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe class="w-full h-56 flex border-2 border-slate-700 rounded-xl transition hover:border-green-600 hover:shadow-xl hover:-translate-y-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8780706790326!2d72.49672071494041!3d23.028248684950135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d5c5d6ba3f%3A0x2dac1a9a5d5f34be!2sIT%20Path%20Solutions!5e0!3m2!1sen!2sin!4v1680447378861!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <div class="flex-cols py-5 cursor-default">
            <p class="text-3xl font-semibold py-1 max-sm:text-lg">Reach out to us</p>
            <p class="text-base py-1 max-sm:text-sm">Located in: Binori B Square 1</p>
            <p class="text-base py-1 max-sm:text-sm">Binori B Square 1, 801, 8th floor, BRTS road</p>
            <p class="text-base py-1 max-sm:text-sm">Ambli Road, Ahmedabad</p>
            <p class="text-base py-1 max-sm:text-sm">Gujarat - 380058</p>
        </div>
    </div>
</div>  