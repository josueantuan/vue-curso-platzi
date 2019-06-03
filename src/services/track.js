import platziMusciService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return platziMusciService.get('/search', {
    params: { q, type }
  })
    .then(res => {
      return res.data
    })
}

export default trackService
