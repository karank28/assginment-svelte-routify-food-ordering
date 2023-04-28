<script lang="ts">
    import * as _ from "lodash";
    import { feedbackStore } from "../stores/FeedbackStore";
    
</script>

<div class="w-full p-6 max-lg:-mt-9">

    <div class="text-3xl font-bold text-center">
        Responses of Feedback Forms
    </div>

    <hr class="h-px my-5 bg-gray-200 border-0" />

    <table class="w-full text-sm text-left border-2 rounded-xl border-gray-500">
        <thead class="text-lg font-semibold max-sm:text-base">
            <tr class="border-b-2 border-gray-500">
                <th scope="col" class="px-6 py-3 fw-bold"> Name </th>
                <th scope="col" class="px-6 py-3"> Email </th>
                <th scope="col" class="px-6 py-3"> Feedback </th>
            </tr>
        </thead>

        <tbody class="text-lg max-sm:p-6">
            {#each $feedbackStore as feedback}
                <tr
                class="border-2 border-gray-500 hover:bg-slate-200"
                >
                <td data-th="Name" class="px-6 py-4 max-md:py-2 max-sm:py-2">
                    {feedback.name}
                </td>
                <td data-th="Description" class="px-6 py-4 max-md:py-0 max-sm:py-0">
                    {feedback.email}
                </td>
                <td data-th="Feedback" class="px-6 py-4 max-md:py-2 max-sm:py-2">
                    {feedback.feedback}
                </td>
                </tr>
            {/each}
        </tbody>

    </table>
</div>