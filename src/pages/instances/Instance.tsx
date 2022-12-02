import { FC, useEffect, useState } from 'react'
import { getInstances, InstanceInfo } from '../../api/TaskApi';

const InstancePage: FC = () => {
    const [instances, setInstances] = useState<InstanceInfo[]>([])

    const loadInstanceInfo = async () => {
        const result = await getInstances({})
        const { data } = result;
        if (data) {
            setInstances(data)
        }
    }

    useEffect(() => {
        loadInstanceInfo();
    }, []);

    return <div>
        {instances.map((inst) => {
            return <div key={inst.id}>
                <p>实例信息：{inst.host}:{inst.port},  同步用户：{inst.username}, 全量配置：{inst.dumpConfig}, 增量配置(暂无) binlog： {inst.position}</p>
            </div>
        })}
    </div>
};


export default InstancePage;