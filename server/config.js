export { PERFORMANCE_PHASES, GARDENS, CREATURES, CREATURE_FORCE_MOVE_MS, CLIENT_HEARTBEAT_INACTIVE_THRESHOLD } from '../constants'
import { PERFORMANCE_PHASES, GARDENS, CREATURES, CREATURE_FORCE_MOVE_MS, CLIENT_HEARTBEAT_INACTIVE_THRESHOLD } from '../constants'

var gardenName, performancePhase

var centralizedInfo = {
  isPlaying: false,
  playStartTime: 0,
}


export const setGarden = (name) => {
  gardenName = name
}

export const getGardenName = () => gardenName

export const setPerformancePhase = (newPhase) => {
  performancePhase = newPhase
  centralizedInfo = {
    isPlaying: false,
    playStartTime: 0
  }
  console.log('setPerformancePhase: ', performancePhase)
}

export const centralizedPhaseStartPlay = () => {
  centralizedInfo.isPlaying = true
  centralizedInfo.playStartTime = Date.now()
}

export const getCentralizedPhaseInfo = () => {
  return centralizedInfo
}

export const isPerformancePhaseCentralized = () => {
  return performancePhase == PERFORMANCE_PHASES.CENTRALIZED
}

export const isPerformancePhaseDecentralized = () => {
  return performancePhase == PERFORMANCE_PHASES.DECENTRALIZED
}

export const isPerformancePhaseDistributed = () => {
  return performancePhase == PERFORMANCE_PHASES.DISTRIBUTED
}

export const getPerformancePhase = () => performancePhase

export const getGardenConfig = () => {
  return GARDENS[gardenName]
}

export const getOtherGardens = () => {
  const otherGardens = {}
  Object.keys(GARDENS).forEach(garden => {
    if (garden == gardenName) return
    otherGardens[garden] = {...GARDENS[garden]}
  })
  return otherGardens
}

export const getOtherGardenAddress = (name) => {
  return `${GARDENS[name].address}:${GARDENS[name].port}`
}