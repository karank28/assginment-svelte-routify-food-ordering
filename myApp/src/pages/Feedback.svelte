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
        toastr.options.positionClass = 'toast-bottom-right'
        toastr.success('Feedback submitted successfully!')
        formState = initialFormState;
    };
</script>

<div class="w-full">
    <div class="border-y-2 text-3xl font-bold text-center py-4 max-sm:text-2xl">
        <i class="fa-regular fa-comments mx-2" />Feedback 
    </div>
</div>
<div class="w-full p-6 flex justify-center max-sm:flex-col">
    <div class="w-2/4 flex border-2 border-slate-700 rounded-2xl hover:border-green-600 max-sm:w-full max-sm:flex-col max-lg:w-full">
        <div class="w-full flex justify-center items-center">
            <div>
                <img class=" max-sm:h-40" src="./img/feedback-banner.jpg" alt="" srcset="">

            </div>
        </div>
        <div class="w-full">
            <form on:submit|preventDefault = {handleSubmit} action="" class="p-5">
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
        </div>
    </div>
</div>  