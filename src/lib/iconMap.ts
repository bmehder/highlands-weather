export const ICON_MAP = new Map<number, string>()

const setMapValues = (values: number[], icon: string) => {
  values.forEach(value => {
    ICON_MAP.set(value, icon)
  })
}

setMapValues([0, 1], 'sun')
setMapValues([2], 'cloud-sun')
setMapValues([3], 'cloud')
setMapValues([45, 48], 'smog')
setMapValues(
  [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  'cloud-showers-heavy'
)
setMapValues([71, 73, 75, 77, 85, 86], 'snowflake')
setMapValues([95, 96, 99], 'cloud-bolt')

export const getIconUrl = (iconCode: number) => `icons/${ICON_MAP.get(iconCode)}.svg`
