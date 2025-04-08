import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis } from 'recharts';

const DermatologistSurvey = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  
  // Gender distribution
  const genderData = [
    { name: '남성', value: 57 },
    { name: '여성', value: 63 }
  ];
  
  // Color configuration
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const GENDER_COLORS = {
    all: '#8884d8',
    male: '#0088FE',
    female: '#FF8042'
  };
  
  // Process Q20 (age question) which has numerical responses
  const processAgeData = () => {
    // 나이별 응답 데이터 (원본 데이터에서 추출)
    const ageData = [
      { age: 19, male: 0, female: 2 },
      { age: 20, male: 8, female: 6 },
      { age: 22, male: 1, female: 1 },
      { age: 25, male: 10, female: 5 },
      { age: 26, male: 1, female: 1 },
      { age: 27, male: 0, female: 3 },
      { age: 28, male: 5, female: 4 },
      { age: 29, male: 3, female: 0 },
      { age: 30, male: 17, female: 20 },
      { age: 31, male: 1, female: 0 },
      { age: 32, male: 1, female: 2 },
      { age: 33, male: 0, female: 3 },
      { age: 34, male: 0, female: 1 },
      { age: 35, male: 4, female: 11 },
      { age: 36, male: 0, female: 1 },
      { age: 38, male: 1, female: 0 },
      { age: 40, male: 4, female: 3 },
      { age: 45, male: 1, female: 0 }
    ];
    
    return ageData;
  };
  
  // Survey data structured for visualizations
  const questionData = [
    {
      id: 'Q1',
      title: 'Q1. 나는 닦토를 한다. VS 안한다.',
      data: [
        { name: '전체', 한다: 9.2, 안한다: 90.8 }
      ],
      maleData: [
        { name: '한다', value: 4 },
        { name: '안한다', value: 53 }
      ],
      femaleData: [
        { name: '한다', value: 7 },
        { name: '안한다', value: 56 }
      ]
    },
    {
      id: 'Q2',
      title: 'Q2. 나는 마스크팩을 즐겨한다. VS 안한다.',
      data: [
        { name: '전체', 한다: 12.5, 안한다: 87.5 }
      ],
      maleData: [
        { name: '한다', value: 5 },
        { name: '안한다', value: 52 }
      ],
      femaleData: [
        { name: '한다', value: 10 },
        { name: '안한다', value: 53 }
      ]
    },
    {
      id: 'Q3',
      title: 'Q3. 나는 이중세안을 한다. VS 안한다.',
      data: [
        { name: '전체', 한다: 40.0, 안한다: 60.0 }
      ],
      maleData: [
        { name: '한다', value: 7 },
        { name: '안한다', value: 50 }
      ],
      femaleData: [
        { name: '한다', value: 41 },
        { name: '안한다', value: 22 }
      ]
    },
    {
      id: 'Q4',
      title: 'Q4. 나는 얼굴 각질제거를 한다. VS 안한다.',
      data: [
        { name: '전체', 한다: 9.2, 안한다: 90.8 }
      ],
      maleData: [
        { name: '한다', value: 4 },
        { name: '안한다', value: 53 }
      ],
      femaleData: [
        { name: '한다', value: 7 },
        { name: '안한다', value: 56 }
      ]
    },
    {
      id: 'Q5',
      title: 'Q5. 나는 때를 민다. VS 안민다.',
      data: [
        { name: '전체', 민다: 5.0, 안민다: 95.0 }
      ],
      maleData: [
        { name: '민다', value: 3 },
        { name: '안민다', value: 54 }
      ],
      femaleData: [
        { name: '민다', value: 3 },
        { name: '안민다', value: 60 }
      ]
    },
    {
      id: 'Q6',
      title: 'Q6. 나는 비오는날 외출할 때 선크림을 바른다. VS 안바른다.',
      data: [
        { name: '전체', 바른다: 55.8, 안바른다: 44.2 }
      ],
      maleData: [
        { name: '바른다', value: 21 },
        { name: '안바른다', value: 36 }
      ],
      femaleData: [
        { name: '바른다', value: 46 },
        { name: '안바른다', value: 17 }
      ]
    },
    {
      id: 'Q7',
      title: 'Q7. 나는 실내에서도 자외선 차단제를 바른다. VS 안바른다.',
      data: [
        { name: '전체', 바른다: 37.5, 안바른다: 62.5 }
      ],
      maleData: [
        { name: '바른다', value: 14 },
        { name: '안바른다', value: 43 }
      ],
      femaleData: [
        { name: '바른다', value: 31 },
        { name: '안바른다', value: 32 }
      ]
    },
    {
      id: 'Q8',
      title: 'Q8. 나는 홈케어 디바이스를 쓴다. VS 안쓴다.',
      data: [
        { name: '전체', 쓴다: 5.0, 안쓴다: 95.0 }
      ],
      maleData: [
        { name: '쓴다', value: 2 },
        { name: '안쓴다', value: 55 }
      ],
      femaleData: [
        { name: '쓴다', value: 4 },
        { name: '안쓴다', value: 59 }
      ]
    },
    {
      id: 'Q9',
      title: 'Q9. 나는 경락을 받는다. VS 안받는다.',
      data: [
        { name: '전체', 받는다: 8.3, 안받는다: 91.7 }
      ],
      maleData: [
        { name: '받는다', value: 5 },
        { name: '안받는다', value: 52 }
      ],
      femaleData: [
        { name: '받는다', value: 5 },
        { name: '안받는다', value: 58 }
      ]
    },
    {
      id: 'Q10',
      title: 'Q10. 나는 뾰루지가 나면 짠다. VS 안짠다.',
      data: [
        { name: '전체', 짠다: 50.0, 안짠다: 50.0 }
      ],
      maleData: [
        { name: '짠다', value: 26 },
        { name: '안짠다', value: 31 }
      ],
      femaleData: [
        { name: '짠다', value: 34 },
        { name: '안짠다', value: 29 }
      ]
    },
    {
      id: 'Q11',
      title: 'Q11. 나는 아이크림을 바른다. VS 안바른다.',
      data: [
        { name: '전체', 바른다: 12.5, 안바른다: 87.5 }
      ],
      maleData: [
        { name: '바른다', value: 4 },
        { name: '안바른다', value: 53 }
      ],
      femaleData: [
        { name: '바른다', value: 11 },
        { name: '안바른다', value: 52 }
      ]
    },
    {
      id: 'Q12',
      title: 'Q12. 나는 백화점 스킨케어 제품을 쓴다. VS 안쓴다.',
      data: [
        { name: '전체', 쓴다: 15.8, 안쓴다: 84.2 }
      ],
      maleData: [
        { name: '쓴다', value: 5 },
        { name: '안쓴다', value: 52 }
      ],
      femaleData: [
        { name: '쓴다', value: 14 },
        { name: '안쓴다', value: 49 }
      ]
    },
    {
      id: 'Q13',
      title: 'Q13. 나는 화장품 살때 성분표를 체크한다. VS 안한다.',
      data: [
        { name: '전체', 한다: 66.7, 안한다: 33.3 }
      ],
      maleData: [
        { name: '한다', value: 39 },
        { name: '안한다', value: 18 }
      ],
      femaleData: [
        { name: '한다', value: 41 },
        { name: '안한다', value: 22 }
      ]
    },
    {
      id: 'Q14',
      title: 'Q14. 하나만 선택한다면? MTS VS 리들샷',
      data: [
        { name: '전체', MTS: 69.2, 리들샷: 30.8 }
      ],
      maleData: [
        { name: 'MTS', value: 41 },
        { name: '리들샷', value: 16 }
      ],
      femaleData: [
        { name: 'MTS', value: 42 },
        { name: '리들샷', value: 21 }
      ]
    },
    {
      id: 'Q15',
      title: 'Q15. 먹는 콜라겐 보충제가 피부탄력에 도움이 된다. VS 되지 않는다.',
      data: [
        { name: '전체', '도움이 된다': 18.3, '도움이 되지 않는다': 81.7 }
      ],
      maleData: [
        { name: '도움이 된다', value: 8 },
        { name: '도움이 되지 않는다', value: 49 }
      ],
      femaleData: [
        { name: '도움이 된다', value: 14 },
        { name: '도움이 되지 않는다', value: 49 }
      ]
    },
    {
      id: 'Q16',
      title: 'Q16. 동일한 스킨케어 제품을 계속 사용하면, 피부가 적응해서 그 효과가 줄어든다. VS 그렇지 않다.',
      data: [
        { name: '전체', 줄어든다: 7.5, '그렇지 않다': 92.5 }
      ],
      maleData: [
        { name: '줄어든다', value: 5 },
        { name: '그렇지 않다', value: 52 }
      ],
      femaleData: [
        { name: '줄어든다', value: 4 },
        { name: '그렇지 않다', value: 59 }
      ]
    },
    {
      id: 'Q17',
      title: 'Q17. 코팩을 하면 모공이 늘어난다. VS 늘어나지 않는다.',
      data: [
        { name: '전체', 늘어난다: 48.3, '늘어나지 않는다': 51.7 }
      ],
      maleData: [
        { name: '늘어난다', value: 20 },
        { name: '늘어나지 않는다', value: 37 }
      ],
      femaleData: [
        { name: '늘어난다', value: 38 },
        { name: '늘어나지 않는다', value: 25 }
      ]
    },
    {
      id: 'Q18',
      title: 'Q18. 우유, 치즈가 피부 트러블을 유발한다. VS 안한다.',
      data: [
        { name: '전체', 한다: 83.3, 안한다: 16.7 }
      ],
      maleData: [
        { name: '한다', value: 46 },
        { name: '안한다', value: 11 }
      ],
      femaleData: [
        { name: '한다', value: 54 },
        { name: '안한다', value: 9 }
      ]
    },
    {
      id: 'Q19',
      title: 'Q19. 타고난 피부를 극복할 수 있다. VS 없다.',
      data: [
        { name: '전체', 있다: 55.8, 없다: 44.2 }
      ],
      maleData: [
        { name: '있다', value: 36 },
        { name: '없다', value: 21 }
      ],
      femaleData: [
        { name: '있다', value: 31 },
        { name: '없다', value: 32 }
      ]
    },
    {
      id: 'Q20',
      title: 'Q20. 리프팅 시술을 몇살부터 받기 시작하겠는가?',
      type: 'age',
      ageData: processAgeData()
    }
  ];

  // Select next question
  const nextQuestion = () => {
    setSelectedQuestion((selectedQuestion + 1) % questionData.length);
  };

  // Select previous question
  const prevQuestion = () => {
    setSelectedQuestion((selectedQuestion - 1 + questionData.length) % questionData.length);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-white border rounded shadow">
          <p className="font-bold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  // Render chart based on question type
  const renderChart = () => {
    const question = questionData[selectedQuestion];
    
    if (question.type === 'age') {
      // Age-based question (Q20)
      const ageData = question.ageData;
      
      // 나이 구간별로 데이터 그룹화
      const ageGroups = {
        '19-24세': { male: 0, female: 0 },
        '25-29세': { male: 0, female: 0 },
        '30-34세': { male: 0, female: 0 },
        '35-39세': { male: 0, female: 0 },
        '40세 이상': { male: 0, female: 0 }
      };
      
      ageData.forEach(item => {
        if (item.age >= 19 && item.age <= 24) {
          ageGroups['19-24세'].male += item.male;
          ageGroups['19-24세'].female += item.female;
        } else if (item.age >= 25 && item.age <= 29) {
          ageGroups['25-29세'].male += item.male;
          ageGroups['25-29세'].female += item.female;
        } else if (item.age >= 30 && item.age <= 34) {
          ageGroups['30-34세'].male += item.male;
          ageGroups['30-34세'].female += item.female;
        } else if (item.age >= 35 && item.age <= 39) {
          ageGroups['35-39세'].male += item.male;
          ageGroups['35-39세'].female += item.female;
        } else {
          ageGroups['40세 이상'].male += item.male;
          ageGroups['40세 이상'].female += item.female;
        }
      });
      
      const groupedData = Object.entries(ageGroups).map(([group, counts]) => ({
        age: group,
        남성: counts.male,
        여성: counts.female
      }));
      
      // 점 형태의 분포도를 위한 데이터 준비
      const scatterData = [];
      ageData.forEach(item => {
        // 남성 데이터
        for (let i = 0; i < item.male; i++) {
          scatterData.push({
            x: item.age,
            y: 1,
            gender: '남성'
          });
        }
        
        // 여성 데이터
        for (let i = 0; i < item.female; i++) {
          scatterData.push({
            x: item.age,
            y: 2,
            gender: '여성'
          });
        }
      });
      
      return (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-center">{question.title}</h3>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-lg font-medium mb-2 text-center">연령별 응답 분포 (점 분포도)</h4>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid />
                    <XAxis 
                      type="number" 
                      dataKey="x" 
                      name="나이" 
                      domain={[18, 46]}
                      label={{ value: '나이', position: 'bottom' }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="y" 
                      name="성별" 
                      domain={[0, 3]}
                      tick={false}
                      axisLine={false}
                    />
                    <ZAxis range={[80, 80]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter 
                      name="남성" 
                      data={scatterData.filter(d => d.gender === '남성')} 
                      fill="#0088FE"
                      shape="circle"
                    />
                    <Scatter 
                      name="여성" 
                      data={scatterData.filter(d => d.gender === '여성')} 
                      fill="#FF8042"
                      shape="circle"
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-lg font-medium mb-2 text-center">연령대별 분포</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={groupedData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="남성" fill="#0088FE" />
                    <Bar dataKey="여성" fill="#FF8042" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-lg font-medium mb-2 text-center">구체적인 나이 분포</h4>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={ageData.filter(d => d.male > 0 || d.female > 0)}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="male" name="남성" fill="#0088FE" />
                    <Bar dataKey="female" name="여성" fill="#FF8042" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // Standard binary question
      return (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-center">{question.title}</h3>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-lg font-medium mb-2 text-center">전체 응답</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={Object.entries(question.data[0])
                        .filter(([key]) => key !== 'name')
                        .map(([key, value]) => ({ name: key, value: value }))}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {Object.entries(question.data[0])
                        .filter(([key]) => key !== 'name')
                        .map(([key, value], index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow">
                <h4 className="text-lg font-medium mb-2 text-center">남성 응답 (57명)</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={question.maleData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                        outerRadius={60}
                        fill="#0088FE"
                        dataKey="value"
                      >
                        {question.maleData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded shadow">
                <h4 className="text-lg font-medium mb-2 text-center">여성 응답 (63명)</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={question.femaleData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                        outerRadius={60}
                        fill="#FF8042"
                        dataKey="value"
                      >
                        {question.femaleData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  
  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">피부과의사 100명에게 물었다 (피부텐텐)</h1>
        <h2 className="text-xl mb-6 text-center text-gray-600">응답자: 총 120명 (남성 57명, 여성 63명)</h2>
        
        <div className="mb-6 flex justify-between items-center bg-white p-3 rounded shadow">
          <button 
            onClick={prevQuestion}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            이전 질문
          </button>
          <div className="text-lg font-semibold">
            {selectedQuestion + 1} / {questionData.length}
          </div>
          <button 
            onClick={nextQuestion}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            다음 질문
          </button>
        </div>
        
        {renderChart()}
        
        <div className="bg-white p-4 rounded shadow mt-6">
          <h3 className="text-xl font-semibold mb-4">주요 발견점</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>이중세안은 여성 응답자(65.1%)가 남성 응답자(12.3%)보다 훨씬 많이 하고 있음</li>
            <li>비오는 날 선크림 사용도 여성(73.0%)이 남성(36.8%)보다 현저히 높음</li>
            <li>실내 자외선 차단제 사용도 여성(49.2%)이 남성(24.6%)보다 두 배 정도 높음</li>
            <li>뾰루지가 나면 짜는 비율은 남녀가 거의 비슷(전체 50%)</li>
            <li>화장품 성분표 확인은 남녀 모두 높은 편(남성 68.4%, 여성 65.1%)</li>
            <li>MTS가 리들샷보다 선호도가 높음(전체 69.2% vs 30.8%)</li>
            <li>유제품이 피부 트러블을 유발한다는 견해가 지배적(전체 83.3%)</li>
            <li>리프팅 시술 시작 나이로는 30세가 가장 많이 선택됨(30.8%)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DermatologistSurvey;