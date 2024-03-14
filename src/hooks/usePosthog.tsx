import { useFeatureFlagEnabled } from 'posthog-js/react'

function usePosthog() {
    const FEATURE_FLAG_IS_UNDER_MAINTENANCE: boolean | undefined = useFeatureFlagEnabled('is-under-maintenance')

    return {
        FEATURE_FLAG_IS_UNDER_MAINTENANCE,
    }
}

export default usePosthog