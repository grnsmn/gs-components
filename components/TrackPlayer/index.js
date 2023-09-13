import React from 'react'
import {  View} from 'react-native'
import { Button, GluestackUIProvider } from '@gluestack-ui/themed';

const TrackPlayer = () => {
  return (
  <GluestackUIProvider>
      <View>
      <Button >Button bello</Button>
    </View>
  </GluestackUIProvider>
  )
}

export default TrackPlayer