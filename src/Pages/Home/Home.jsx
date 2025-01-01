import React from 'react'
import { Banner } from './Banner'
import { Category } from './Category'
import { Section2 } from './Section2'
import { Popularmenu } from './Popularmenu'
import { CheifRecommendation } from './CheifRecommnedation/CheifRecommendation'

export const Home = () => {
  return (
<>
<Banner></Banner>
<Category></Category>
<Section2></Section2>
<Popularmenu></Popularmenu>
<CheifRecommendation></CheifRecommendation>
</>
  )
}
