import { useFeatureFlagEnabled } from 'posthog-js/react'

function usePosthog() {
    const IS_TOGGLE_FEATURE = Boolean(import.meta.env.VITE_IS_TOGGLE_FEATURE)

    const FEATURE_FLAG_IS_UNDER_MAINTENANCE: boolean | undefined = IS_TOGGLE_FEATURE ? useFeatureFlagEnabled('is-under-maintenance') : true

    return {
        FEATURE_FLAG_IS_UNDER_MAINTENANCE,
    }
}

export default usePosthog