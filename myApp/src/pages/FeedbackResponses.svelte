<script lang="ts">
    import * as _ from "lodash";
    import { feedbackStore } from "../stores/FeedbackStore";
    
</script>

<div class="w-full p-6">

    <div class="text-3xl font-bold text-center">
        Responses of Feedback Forms
    </div>

    <hr class="h-px my-5 bg-gray-200 border-0" />

    <table class="w-full text-sm text-left">
        <thead class="text-lg font-semibold max-sm:text-base">
            <tr class="border-b-2 border-gray-500">
                <th scope="col" class="px-6 py-3 fw-bold"> Name </th>
                <th scope="col" class="px-6 py-3"> Email </th>
                <th scope="col" class="px-6 py-3"> Feedback </th>
            </tr>
        </thead>

        <tbody>
            {#each $feedbackStore as feedback}
                <tr
                class="border-b border-gray-500 max-sm:border-b-2 max-sm:border-gray-500 max-sm:mb-12"
                >
                <td data-th="Name" class="px-6 py-4">
                    {feedback.name}
                </td>
                <td data-th="Description" class="px-6 py-4">
                    {feedback.email}
                </td>
                <td data-th="Price" class="px-6 py-4 max-sm:font-bold">
                    {feedback.feedback}
                </td>
                </tr>
            {/each}
        </tbody>

    </table>
</div>