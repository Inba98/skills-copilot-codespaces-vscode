function skillsMember(){
    return{
        restrict:'E',
        templateUrl: 'modules/skills/views/member.html',
        conteroller: 'skillsmemberconteroller',
        conterollerAs: 'vm',
        bindToController: true,
        scope:{
            member:'m'
        }
    };
}