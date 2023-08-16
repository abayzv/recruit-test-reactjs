import { rest } from 'msw'
import { renderHook, waitFor } from '@testing-library/react'
import { server } from '../setupTest'
import { createWrapper } from '../utils/createWrapper'
import { useRepoData } from '../hooks/useRepoData'
import { getMovieDetails } from '../services/MovieTestServices'

describe('get movie details', () => {
    test('successful get movie details', async () => {
        const { result } = renderHook(() => useRepoData(getMovieDetails), {
            wrapper: createWrapper()
        })

        await waitFor(() => expect(result.current.isSuccess).toBe(true))
        expect(result.current.data?.title).toBe('Transformers: Rise of the Beasts')
        expect(result.current.data?.id).toBe(667538)
    })

    test('failure get movie details', async () => {
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )

        const { result } = renderHook(() => useRepoData(getMovieDetails), {
            wrapper: createWrapper()
        })

        await waitFor(() => expect(result.current.isError).toBe(true))

        expect(result.current.error).toBeDefined()
    })
})