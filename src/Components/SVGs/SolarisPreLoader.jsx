import React, { useEffect } from 'react'

function SolarisPreLoader({viewBox}) {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%"
	 		viewBox="0 0 1000 1000" style={{enableBackground:'new 0 0 1000 1000',background:'#000000'}}>
			<g>
				<animate id="curves" attributeName="opacity" from="1" to="0" begin="curve3.end+0.3s;" dur="1s" fill="freeze"/>						
				<path id="c1" className="st0" d="M155.6,855.31c-14.86-17.42-81.22-99.01-72.81-215.5c7.79-107.98,77.07-207.82,181.87-250.38
					c104.09-42.27,230.39-22.82,312.54,60.7c91.98,93.51,107.44,245.8,32.84,365.23"
					strokeDasharray="1300" strokeDashoffset="1300">
					<animate attributeName="stroke-dashoffset" from="1300" to="0" dur="3s" fill="freeze"/>
				</path>
				<path id="c2" className="st0" d="M164.93,864.23C135.02,836.09,29.84,730.36,9.79,557.08C4.75,513.49-3.83,388.54,69.36,258.35
					C85.93,228.88,168.49,89.5,343.67,33.01c43.19-13.92,167.7-54.07,304.17,4.56C758.95,85.3,815.66,171.72,835.03,205.05
					c79.68,137.13,77.47,322.69-18.91,458.37c-68.44,96.35-162.38,136.59-206.07,151.95"
					strokeDasharray="2400" strokeDashoffset="2400">
					<animate id="curve2" attributeName="stroke-dashoffset" from="2400" to="0" dur="3s" fill="freeze"/>
				</path>
				<path id="c3" className="st0" d="M610.04,815.37c-115.99,40.44-215.15,1.65-236.22-7.14c-13.73-5.73-149.67-65.11-192.19-216.56
					c-35.68-127.07,8.03-269.54,114.16-353.63c135.82-107.61,296.99-58.72,307.44-55.35c138.5,44.68,193.95,164.46,201.67,181.9
					c8.91,20.14,51.06,120.47,11.8,239.6C811.66,619.5,761.81,762.46,610.04,815.37z"
					strokeDasharray="2200" strokeDashoffset="2200">
					<animate id="curve3" attributeName="stroke-dashoffset" from="2200" to="0" begin="curve2.end" dur="1.5s" fill="freeze"/>
				</path>
				<path id="c4" className="st0" d="M155.6,855.31c-2.83-2.73-22.24-21.59-40.82-44.75C39.09,716.24,18.5,613.21,14.13,589.11
					C-13.91,434.7,41.4,313.92,55.28,285.38C116.32,159.87,214.13,95.44,263.1,68.49C297.86,49.36,401.28-2.17,540.46,7.8
					c107.41,7.69,183.51,48.24,208.42,62.49C864.78,136.6,921,233.28,941.45,273.49c92.64,182.1,37.74,357.81,29.57,382.57
					c-6.68,20.22-84.18,241.37-317.18,316.5c0,0-194.67,62.77-380.64-33.25C207.22,905.24,155.6,855.31,155.6,855.31z"
					strokeDasharray="3100" strokeDashoffset="3100">
					<animate attributeName="stroke-dashoffset" from="3100" to="0" dur="3s" fill="freeze"/>
				</path>
			</g>
	</svg>

  )
}

export default SolarisPreLoader