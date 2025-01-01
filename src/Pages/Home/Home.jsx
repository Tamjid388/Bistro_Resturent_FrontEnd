import React from 'react'
import { Banner } from './Banner'
import { Category } from './Category'
import { Section2 } from './Section2'
import { Popularmenu } from './Popularmenu'
import { CheifRecommendation } from './CheifRecommnedation/CheifRecommendation'
import { Featured } from './Featured/Featured'
import { Testimonials } from './Testimonials/Testimonials'

export const Home = () => {
  return (
<>
<Banner></Banner>
<Category></Category>
<Section2></Section2>
<Popularmenu></Popularmenu>
<CheifRecommendation></CheifRecommendation>
<Featured></Featured>
<Testimonials></Testimonials>
</>
  )
}
