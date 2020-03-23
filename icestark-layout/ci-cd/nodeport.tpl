apiVersion: apps/v1                  # K8S对应的API版本
kind: Deployment                                # 对应的类型
metadata:
  name: {DEPLOYNAME}-deploy
  labels:
    name: {DEPLOYNAME}
spec:
  selector:
    matchLabels:
      name: {DEPLOYNAME}
  replicas: {REPLICAS}                                   # 镜像副本数量
  template:
    metadata:
      labels:                                   # 容器的标签 可和service关联
        name: {DEPLOYNAME}
    spec:
      imagePullSecrets:
      - name: registry-key
      containers:
        - name: {DEPLOYNAME}                          # 容器名和镜像
          image: {IMAGE_URL}
          imagePullPolicy: Always
#          livenessProbe:
#            failureThreshold: 3
#            initialDelaySeconds: 10
#            periodSeconds: 5
#            successThreshold: 1
#            tcpSocket:
#              port: {TARGETPORT}
#            timeoutSeconds: 5
#          readinessProbe:
#            failureThreshold: 3
#            initialDelaySeconds: 10
#            periodSeconds: 5
#            successThreshold: 2
#            tcpSocket:
#              port: {TARGETPORT}
#            timeoutSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: {DEPLOYNAME}-svc                        # 名称
  labels:
    name: {DEPLOYNAME}
spec:
  type: NodePort                               # 开发端口的类型
  selector:                                     # service负载的容器需要有同样的labels
    name: {DEPLOYNAME}
  ports:
    - port: {TARGETPORT}                                    # 通过service来访问的端口
      targetPort: {TARGETPORT}                              # 对应容器的端口
      nodePort: {NODEPORT}                             # 对应需要放到宿主机IP上的端口