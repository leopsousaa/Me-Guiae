import React from 'react'
import { Image, StyleSheet } from 'react-native'
import ScrollContainer from '../../components/ScrollContainer'

import { widthDPI, RoundPixel } from '../../utils/roundPixel'

const DetailsRoute = ({ image }) => {
  return (
    <ScrollContainer>
      <Image
        source={{
          uri: image
        }}
        style={styles.cape}
      />
    </ScrollContainer>
  )
}

const styles = StyleSheet.create({
  cape: {
    width: widthDPI(100),
    height: RoundPixel(248)
  }
})

export default DetailsRoute
