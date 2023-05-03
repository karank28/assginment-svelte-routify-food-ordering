<script lang="ts">
    import * as _ from "lodash";
    import { feedbackStore } from "../stores/FeedbackStore";
    
</script>

<div class="w-full">
    <div class="border-y-2 text-3xl font-bold text-center py-4">
        <i class="fa-regular fa-comment-dots mx-2" />Responses of Feedback Forms
    </div>
</div>

<div class="w-full p-6">
    <table class="w-full text-sm text-left rounded-xl">
        <thead class="text-lg font-semibold max-sm:text-base">
            <tr class="border-b-2 border-gray-500">
                <th scope="col" class="px-6 py-3"><i class="fa-regular fa-user me-1 max-lg:hidden"></i> Name </th>
                <th scope="col" class="px-6 py-3"><i class="fa-regular fa-envelope me-1 max-lg:hidden"></i> Email </th>
                <th scope="col" class="px-6 py-3"><i class="fa-regular fa-comment-dots me-1 max-lg:hidden"></i> Feedback </th>
            </tr>
        </thead>

        <tbody class="text-lg max-sm:p-6">
            {#each $feedbackStore as feedback}
                <tr
                class="border-b-2 border-gray-200 hover:bg-slate-200"
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